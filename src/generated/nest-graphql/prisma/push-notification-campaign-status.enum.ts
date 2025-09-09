import { registerEnumType } from '@nestjs/graphql';

export enum PushNotificationCampaignStatus {
    SCHEDULED = "SCHEDULED",
    PROCESSED = "PROCESSED",
    CANCELLED = "CANCELLED"
}


registerEnumType(PushNotificationCampaignStatus, { name: 'PushNotificationCampaignStatus', description: undefined })
