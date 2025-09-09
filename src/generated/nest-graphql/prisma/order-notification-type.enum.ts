import { registerEnumType } from '@nestjs/graphql';

export enum OrderNotificationType {
    CONFIRMED = "CONFIRMED",
    LABEL_GENERATED = "LABEL_GENERATED",
    IN_TRANSIT = "IN_TRANSIT",
    DELIVERED = "DELIVERED",
    DELIVERY_ATTEMPTED = "DELIVERY_ATTEMPTED",
    CANCELLED = "CANCELLED"
}


registerEnumType(OrderNotificationType, { name: 'OrderNotificationType', description: undefined })
