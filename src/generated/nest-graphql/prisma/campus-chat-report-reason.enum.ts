import { registerEnumType } from '@nestjs/graphql';

export enum CampusChatReportReason {
    INAPPROPRIATE_CONTENT = "INAPPROPRIATE_CONTENT",
    HATE_SPEECH = "HATE_SPEECH",
    SPAM = "SPAM",
    HARASSMENT = "HARASSMENT",
    FAKE_NEWS = "FAKE_NEWS",
    OTHER = "OTHER"
}


registerEnumType(CampusChatReportReason, { name: 'CampusChatReportReason', description: undefined })
