import { registerEnumType } from '@nestjs/graphql';

export enum ColorScalarFieldEnum {
    id = "id",
    name = "name",
    hex = "hex",
    active = "active",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ColorScalarFieldEnum, { name: 'ColorScalarFieldEnum', description: undefined })
