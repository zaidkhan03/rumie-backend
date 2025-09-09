import { registerEnumType } from '@nestjs/graphql';

export enum BooleanChoice {
    YES = "YES",
    NO = "NO"
}


registerEnumType(BooleanChoice, { name: 'BooleanChoice', description: undefined })
