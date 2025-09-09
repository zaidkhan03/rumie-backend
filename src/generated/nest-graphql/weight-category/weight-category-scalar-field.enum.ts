import { registerEnumType } from '@nestjs/graphql';

export enum WeightCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    alias = "alias",
    shippingFee = "shippingFee",
    active = "active",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(WeightCategoryScalarFieldEnum, { name: 'WeightCategoryScalarFieldEnum', description: undefined })
