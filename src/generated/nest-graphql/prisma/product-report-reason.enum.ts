import { registerEnumType } from '@nestjs/graphql';

export enum ProductReportReason {
    INAPPROPRIATE_CONTENT = "INAPPROPRIATE_CONTENT",
    COUNTERFEIT = "COUNTERFEIT",
    MISLEADING = "MISLEADING",
    PROHIBITED_ITEM = "PROHIBITED_ITEM",
    SPAM = "SPAM",
    HARASSMENT = "HARASSMENT",
    INCORRECT_CATEGORY = "INCORRECT_CATEGORY",
    OTHER = "OTHER"
}


registerEnumType(ProductReportReason, { name: 'ProductReportReason', description: undefined })
