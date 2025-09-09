import { registerEnumType } from '@nestjs/graphql';

export enum NotificationPayloadsScalarFieldEnum {
    id = "id"
}


registerEnumType(NotificationPayloadsScalarFieldEnum, { name: 'NotificationPayloadsScalarFieldEnum', description: undefined })
