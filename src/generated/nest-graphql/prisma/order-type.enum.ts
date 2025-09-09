import { registerEnumType } from '@nestjs/graphql';

export enum OrderType {
    BUY = "BUY",
    RENT = "RENT"
}


registerEnumType(OrderType, { name: 'OrderType', description: undefined })
