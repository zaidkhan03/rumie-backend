import { registerEnumType } from '@nestjs/graphql';

export enum UserGenderFilter {
    ALL = "ALL",
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}


registerEnumType(UserGenderFilter, { name: 'UserGenderFilter', description: undefined })
