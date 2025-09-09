import { registerEnumType } from '@nestjs/graphql';

export enum NotificationType {
    OFFER = "OFFER",
    RENTAL = "RENTAL",
    ORDER = "ORDER",
    PAYOUT = "PAYOUT",
    SYSTEM = "SYSTEM",
    PERSONAL_DM = "PERSONAL_DM",
    CAMPUS_CHAT_REPLY = "CAMPUS_CHAT_REPLY"
}


registerEnumType(NotificationType, { name: 'NotificationType', description: undefined })
