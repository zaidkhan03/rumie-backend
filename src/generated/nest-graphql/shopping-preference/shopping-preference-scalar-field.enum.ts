import { registerEnumType } from '@nestjs/graphql';

export enum ShoppingPreferenceScalarFieldEnum {
    id = "id",
    name = "name",
    image = "image",
    active = "active",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userIds = "userIds"
}


registerEnumType(ShoppingPreferenceScalarFieldEnum, { name: 'ShoppingPreferenceScalarFieldEnum', description: undefined })
