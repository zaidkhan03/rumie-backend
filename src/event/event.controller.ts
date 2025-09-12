import {
  Controller,
  Get,
  Param,
  NotFoundException,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  EventAnalyticDTO,
  EventService,
  MonthlyImpression,
} from './event.service';

interface CampaignMetrics {
  totalImpressions: number;
  totalClicks: number;
  totalCtaClicks: number;
  ctr: number;
  maleCount: number;
  femaleCount: number;
}

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('save')
  @HttpCode(HttpStatus.OK) // This
  async saveEvents(
    @Body()
    events: EventAnalyticDTO[],
  ): Promise<{ count: number }> {
    return this.eventService.saveEvents(events);
  }

  @Get('campaign/:id')
  async getCampaignMetrics(@Param('id') id: string): Promise<CampaignMetrics> {
    if (!id) {
      throw new NotFoundException('Campaign ID is required');
    }

    try {
      const metrics = await this.eventService.getCampaignMetrics(id);
      return {
        totalImpressions: metrics.totalImpressions,
        totalClicks: metrics.totalClicks,
        totalCtaClicks: metrics.totalCtaClicks,
        ctr: metrics.ctr,
        maleCount: metrics.maleCount,
        femaleCount: metrics.femaleCount,
      };
    } catch (error) {
      throw new NotFoundException(`Campaign with ID ${id} not found`);
    }
  }

  @Get('universityStats/:universityId')
  async getUniversityStats(
    @Param('universityId') universityId: string,
  ): Promise<MonthlyImpression[]> {
    if (!universityId) {
      throw new NotFoundException('University ID is required');
    }

    try {
      return this.eventService._getMonthlyUniversityImpressions(universityId);
    } catch (e) {}
  }
}
