import { registerEnumType } from '@nestjs/graphql';

export enum MessageActionType {
    ACCEPT_REQUEST = "ACCEPT_REQUEST",
    REJECT_REQUEST = "REJECT_REQUEST",
    WITHDRAW_REQUEST = "WITHDRAW_REQUEST",
    COUNTER_REQUEST = "COUNTER_REQUEST"
}


registerEnumType(MessageActionType, { name: 'MessageActionType', description: undefined })
