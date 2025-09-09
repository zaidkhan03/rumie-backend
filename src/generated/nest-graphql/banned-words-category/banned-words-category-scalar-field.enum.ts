import { registerEnumType } from '@nestjs/graphql';

export enum BannedWordsCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    severity = "severity",
    active = "active",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BannedWordsCategoryScalarFieldEnum, { name: 'BannedWordsCategoryScalarFieldEnum', description: undefined })
