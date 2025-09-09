import { registerEnumType } from '@nestjs/graphql';

export enum LegacyImagesScalarFieldEnum {
    id = "id",
    oldUrl = "oldUrl",
    newUrl = "newUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(LegacyImagesScalarFieldEnum, { name: 'LegacyImagesScalarFieldEnum', description: undefined })
