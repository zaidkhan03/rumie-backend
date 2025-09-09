import { registerEnumType } from '@nestjs/graphql';

export enum SupportTicketScalarFieldEnum {
    id = "id",
    type = "type",
    issue = "issue",
    initiator = "initiator",
    associatedUserId = "associatedUserId",
    resolved = "resolved",
    concernedId = "concernedId",
    userLastSeen = "userLastSeen",
    adminLastSeen = "adminLastSeen",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SupportTicketScalarFieldEnum, { name: 'SupportTicketScalarFieldEnum', description: undefined })
