import { registerEnumType } from '@nestjs/graphql';

export enum MessageState {
    INITIAL = "INITIAL",
    WITHDRAWN = "WITHDRAWN",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    COUNTERED = "COUNTERED"
}


registerEnumType(MessageState, { name: 'MessageState', description: undefined })
