import { registerEnumType } from '@nestjs/graphql';

export enum DealScalarFieldEnum {
    id = "id",
    name = "name",
    image = "image",
    url = "url",
    type = "type",
    couponCode = "couponCode",
    active = "active",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    savedUserIds = "savedUserIds"
}


registerEnumType(DealScalarFieldEnum, { name: 'DealScalarFieldEnum', description: undefined })
