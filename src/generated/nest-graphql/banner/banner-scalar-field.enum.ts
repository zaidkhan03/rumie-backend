import { registerEnumType } from '@nestjs/graphql';

export enum BannerScalarFieldEnum {
    id = "id",
    name = "name",
    type = "type",
    positions = "positions",
    active = "active",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BannerScalarFieldEnum, { name: 'BannerScalarFieldEnum', description: undefined })
