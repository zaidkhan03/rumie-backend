import { registerEnumType } from '@nestjs/graphql';

export enum MessageScalarFieldEnum {
    id = "id",
    clientId = "clientId",
    senderId = "senderId",
    type = "type",
    payload = "payload",
    state = "state",
    conversationId = "conversationId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(MessageScalarFieldEnum, { name: 'MessageScalarFieldEnum', description: undefined })
