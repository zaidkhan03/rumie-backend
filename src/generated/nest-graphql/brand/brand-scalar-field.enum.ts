import { registerEnumType } from '@nestjs/graphql';

export enum BrandScalarFieldEnum {
    id = "id",
    name = "name",
    image = "image",
    active = "active",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    featured = "featured"
}


registerEnumType(BrandScalarFieldEnum, { name: 'BrandScalarFieldEnum', description: undefined })
