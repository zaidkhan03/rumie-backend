import { registerEnumType } from '@nestjs/graphql';

export enum SupportTicketType {
    General = "General",
    OrderRelated = "OrderRelated",
    ProductRelated = "ProductRelated"
}


registerEnumType(SupportTicketType, { name: 'SupportTicketType', description: undefined })
