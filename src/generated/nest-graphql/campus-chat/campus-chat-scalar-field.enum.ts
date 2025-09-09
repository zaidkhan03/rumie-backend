import { registerEnumType } from '@nestjs/graphql';

export enum CampusChatScalarFieldEnum {
    id = "id",
    eduInstituteId = "eduInstituteId",
    name = "name",
    type = "type",
    description = "description",
    active = "active",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CampusChatScalarFieldEnum, { name: 'CampusChatScalarFieldEnum', description: undefined })
