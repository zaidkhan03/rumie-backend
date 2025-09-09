import { registerEnumType } from '@nestjs/graphql';

export enum ProductReportScalarFieldEnum {
    id = "id",
    productId = "productId",
    reporterId = "reporterId",
    reason = "reason",
    details = "details",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductReportScalarFieldEnum, { name: 'ProductReportScalarFieldEnum', description: undefined })
