import { registerEnumType } from '@nestjs/graphql';

export enum OrderStatus {
    CONFIRMED = "CONFIRMED",
    CANCELLED = "CANCELLED"
}


registerEnumType(OrderStatus, { name: 'OrderStatus', description: undefined })
