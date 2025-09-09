import { registerEnumType } from '@nestjs/graphql';

export enum SystemNotificationType {
    CONVERSATION_RELATED = "CONVERSATION_RELATED",
    ORDER_RELATED = "ORDER_RELATED",
    PAYOUT_RELATED = "PAYOUT_RELATED",
    PROFILE_RELATED = "PROFILE_RELATED"
}


registerEnumType(SystemNotificationType, { name: 'SystemNotificationType', description: undefined })
