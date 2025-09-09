import { registerEnumType } from '@nestjs/graphql';

export enum ProductCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    image = "image",
    parentId = "parentId",
    preferredGender = "preferredGender",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    active = "active",
    shippable = "shippable"
}


registerEnumType(ProductCategoryScalarFieldEnum, { name: 'ProductCategoryScalarFieldEnum', description: undefined })
