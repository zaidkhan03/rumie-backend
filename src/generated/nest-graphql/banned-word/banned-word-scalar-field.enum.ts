import { registerEnumType } from '@nestjs/graphql';

export enum BannedWordScalarFieldEnum {
    id = "id",
    word = "word",
    categoryId = "categoryId",
    active = "active",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BannedWordScalarFieldEnum, { name: 'BannedWordScalarFieldEnum', description: undefined })
