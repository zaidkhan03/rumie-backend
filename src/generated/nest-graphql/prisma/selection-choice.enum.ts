import { registerEnumType } from '@nestjs/graphql';

export enum SelectionChoice {
    SINGLE = "SINGLE",
    MULTIPLE = "MULTIPLE"
}


registerEnumType(SelectionChoice, { name: 'SelectionChoice', description: undefined })
