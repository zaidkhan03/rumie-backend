import { registerEnumType } from '@nestjs/graphql';

export enum ProductCommentScalarFieldEnum {
    id = "id",
    text = "text",
    parentId = "parentId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    productListingId = "productListingId",
    userId = "userId",
    flagged = "flagged",
    archived = "archived"
}


registerEnumType(ProductCommentScalarFieldEnum, { name: 'ProductCommentScalarFieldEnum', description: undefined })
