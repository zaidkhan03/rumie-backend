import { registerEnumType } from '@nestjs/graphql';

export enum DirectMessageScalarFieldEnum {
    id = "id",
    clientId = "clientId",
    senderId = "senderId",
    type = "type",
    payload = "payload",
    personalDmId = "personalDmId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DirectMessageScalarFieldEnum, { name: 'DirectMessageScalarFieldEnum', description: undefined })
