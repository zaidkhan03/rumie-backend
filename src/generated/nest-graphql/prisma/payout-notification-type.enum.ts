import { registerEnumType } from '@nestjs/graphql';

export enum PayoutNotificationType {
    PROCESSED = "PROCESSED"
}


registerEnumType(PayoutNotificationType, { name: 'PayoutNotificationType', description: undefined })
