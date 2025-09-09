import { registerEnumType } from '@nestjs/graphql';

export enum NotificationScalarFieldEnum {
    id = "id",
    userId = "userId",
    type = "type",
    payload = "payload",
    title = "title",
    body = "body",
    createdAt = "createdAt",
    expiresAt = "expiresAt",
    isRead = "isRead"
}


registerEnumType(NotificationScalarFieldEnum, { name: 'NotificationScalarFieldEnum', description: undefined })
