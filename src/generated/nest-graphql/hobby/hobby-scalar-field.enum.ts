import { registerEnumType } from '@nestjs/graphql';

export enum HobbyScalarFieldEnum {
    id = "id",
    name = "name",
    image = "image",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    active = "active",
    userIds = "userIds"
}


registerEnumType(HobbyScalarFieldEnum, { name: 'HobbyScalarFieldEnum', description: undefined })
