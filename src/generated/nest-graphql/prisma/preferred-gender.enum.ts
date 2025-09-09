import { registerEnumType } from '@nestjs/graphql';

export enum PreferredGender {
    MEN = "MEN",
    WOMEN = "WOMEN",
    ALL = "ALL"
}


registerEnumType(PreferredGender, { name: 'PreferredGender', description: undefined })
