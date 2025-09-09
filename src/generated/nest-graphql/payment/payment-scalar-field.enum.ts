import { registerEnumType } from '@nestjs/graphql';

export enum PaymentScalarFieldEnum {
    id = "id",
    gateway = "gateway",
    amount = "amount",
    methodDescription = "methodDescription",
    stripePaymentId = "stripePaymentId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PaymentScalarFieldEnum, { name: 'PaymentScalarFieldEnum', description: undefined })
