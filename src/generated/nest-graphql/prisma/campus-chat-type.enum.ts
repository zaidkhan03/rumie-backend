import { registerEnumType } from '@nestjs/graphql';

export enum CampusChatType {
    GENERAL = "GENERAL",
    STUDENT_BUSINESS = "STUDENT_BUSINESS",
    LOST_AND_FOUND = "LOST_AND_FOUND",
    EVENTS = "EVENTS",
    BUY_SELL = "BUY_SELL",
    ACADEMICS = "ACADEMICS",
    ANNOUNCEMENTS = "ANNOUNCEMENTS",
    SPORTS = "SPORTS",
    HOUSING = "HOUSING",
    JOBS_AND_INTERNSHIPS = "JOBS_AND_INTERNSHIPS",
    CUSTOM = "CUSTOM"
}


registerEnumType(CampusChatType, { name: 'CampusChatType', description: undefined })
