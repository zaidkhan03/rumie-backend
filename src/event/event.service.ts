import { Injectable } from "@nestjs/common";
import { EventType, Gender } from "@prisma/client";
import { DatabaseService } from "src/db/db.service";

export interface MonthlyImpression {
  month: string;
  year: string;
  impressions: number;
}

export type EventAnalyticDTO = {
  id: string;
  campaignId: string;
  userID: string;
  gender: Gender;
  eduInstituteId: string;
  platform: string;
  type: EventType;
  timestamp: number;
  screen: string;
  batch: string;
};
@Injectable()
export class EventService {
  constructor(private db: DatabaseService) {}

  async saveEvents(events: EventAnalyticDTO[]): Promise<{ count: number }> {
    try {
      const savedEvents = await this.db.event.createMany({
        data: events.map((event) => ({
          clientId: event.id,
          campaignId: event.campaignId,
          userId: event.userID,
          gender: event.gender,
          eduInstituteId: event.eduInstituteId,
          platform: event.platform,
          type: event.type,
          timestamp: new Date(event.timestamp),
          screen: event.screen,
          batch: event.batch,
        })),
      });

      console.log(savedEvents);

      return savedEvents;
    } catch (e) {
      console.log(e);
      console.log("Something went wrong");
    }
  }

  async getCampaignMetrics(campaignId: string) {
    const metrics = await this.db.event.groupBy({
      by: ["gender", "type"],
      where: {
        campaignId: campaignId,
      },
      _count: {
        _all: true,
      },
    });

    let totalImpressions = 0;
    let totalClicks = 0;
    let totalCtaClicks = 0;
    let maleCount = 0;
    let femaleCount = 0;

    metrics.forEach((metric) => {
      const count = metric._count._all;
      if (metric.gender === "MALE") {
        maleCount += count;
      } else if (metric.gender === "FEMALE") {
        femaleCount += count;
      }

      switch (metric.type) {
        case EventType.impression:
          totalImpressions += count;
          break;
        case EventType.click:
          totalClicks += count;
          break;
        case EventType.ctaClick:
          totalCtaClicks += count;
          break;
      }
    });

    const ctr =
      totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;

    return {
      totalImpressions,
      totalClicks,
      totalCtaClicks,
      ctr,
      maleCount,
      femaleCount,
    };
  }

  async getMonthlyUniversityImpressions(
    eduInstituteId: string
  ): Promise<MonthlyImpression[]> {
    const results = await this.db.event.groupBy({
      by: ["timestamp"],
      where: {
        type: "impression",
        eduInstituteId,
      },
      _count: {
        _all: true,
      },
      orderBy: {
        timestamp: "asc",
      },
    });

    const monthlyImpressions: MonthlyImpression[] = [];
    results.forEach((result) => {
      const date = new Date(result.timestamp);
      const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

      const existingEntry = monthlyImpressions.find(
        (entry) =>
          `${entry.year}-${String(new Date(entry.month + " 1").getMonth() + 1).padStart(2, "0")}` ===
          monthYear
      );

      if (existingEntry) {
        existingEntry.impressions += result._count._all;
      } else {
        monthlyImpressions.push({
          month: date.toLocaleString("default", { month: "long" }),
          year: date.getFullYear().toString(),
          impressions: result._count._all,
        });
      }
    });

    return monthlyImpressions.sort((a, b) => {
      const dateA = new Date(`${a.month} 1, ${a.year}`);
      const dateB = new Date(`${b.month} 1, ${b.year}`);
      return dateA.getTime() - dateB.getTime();
    });
  }

  async _getMonthlyUniversityImpressions(
    eduInstituteId: string
  ): Promise<MonthlyImpression[]> {
    const results = await this.db.event.aggregateRaw({
      pipeline: [
        {
          $match: {
            type: "impression",
            eduInstituteId: eduInstituteId,
          },
        },
        {
          $group: {
            _id: {
              year: { $year: "$timestamp" },
              month: { $month: "$timestamp" },
            },
            impressions: { $sum: 1 },
          },
        },
        {
          $sort: {
            "_id.year": 1,
            "_id.month": 1,
          },
        },
      ],
    });

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return (results as unknown as any[]).map((result) => ({
      month: monthNames[result._id.month - 1],
      year: result._id.year.toString(),
      impressions: result.impressions,
    }));
  }
}
