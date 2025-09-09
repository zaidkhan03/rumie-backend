import { registerEnumType } from '@nestjs/graphql';

export enum OrderPayoutRequestLogScalarFieldEnum {
    id = "id",
    orderId = "orderId",
    email = "email",
    valid = "valid",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OrderPayoutRequestLogScalarFieldEnum, { name: 'OrderPayoutRequestLogScalarFieldEnum', description: undefined })
