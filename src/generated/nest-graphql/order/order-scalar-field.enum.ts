import { registerEnumType } from '@nestjs/graphql';

export enum OrderScalarFieldEnum {
    id = "id",
    productId = "productId",
    type = "type",
    providerId = "providerId",
    consumerId = "consumerId",
    conversationId = "conversationId",
    paymentId = "paymentId",
    status = "status",
    payload = "payload",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum', description: undefined })
