import { registerEnumType } from '@nestjs/graphql';

export enum CampusChatMessageScalarFieldEnum {
    id = "id",
    chatId = "chatId",
    userId = "userId",
    clientId = "clientId",
    type = "type",
    content = "content",
    reportCount = "reportCount",
    flagged = "flagged",
    flaggedAt = "flaggedAt",
    flaggedBy = "flaggedBy",
    deletedAt = "deletedAt",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CampusChatMessageScalarFieldEnum, { name: 'CampusChatMessageScalarFieldEnum', description: undefined })
