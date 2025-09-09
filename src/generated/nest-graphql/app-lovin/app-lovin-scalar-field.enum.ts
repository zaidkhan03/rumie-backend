import { registerEnumType } from '@nestjs/graphql';

export enum AppLovinScalarFieldEnum {
    id = "id",
    alias = "alias",
    adUnitId = "adUnitId",
    type = "type",
    position = "position",
    active = "active",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AppLovinScalarFieldEnum, { name: 'AppLovinScalarFieldEnum', description: undefined })
