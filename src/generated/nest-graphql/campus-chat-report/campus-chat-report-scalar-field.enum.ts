import { registerEnumType } from '@nestjs/graphql';

export enum CampusChatReportScalarFieldEnum {
    id = "id",
    messageId = "messageId",
    commentId = "commentId",
    reporterId = "reporterId",
    reason = "reason",
    details = "details",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CampusChatReportScalarFieldEnum, { name: 'CampusChatReportScalarFieldEnum', description: undefined })
