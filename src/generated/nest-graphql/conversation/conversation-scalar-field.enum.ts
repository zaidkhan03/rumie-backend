import { registerEnumType } from '@nestjs/graphql';

export enum ConversationScalarFieldEnum {
    id = "id",
    productId = "productId",
    initiatedBy = "initiatedBy",
    participantIds = "participantIds",
    lastMessageId = "lastMessageId",
    valid = "valid",
    enabled = "enabled",
    type = "type",
    preferredPaymentMethod = "preferredPaymentMethod",
    preferredAddressId = "preferredAddressId",
    paymentLinkSent = "paymentLinkSent",
    deliveryConfirmedBySeller = "deliveryConfirmedBySeller",
    paymentLinkCount = "paymentLinkCount",
    orderId = "orderId",
    payload = "payload",
    consumersLastSeen = "consumersLastSeen",
    providersLastSeen = "providersLastSeen",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ConversationScalarFieldEnum, { name: 'ConversationScalarFieldEnum', description: undefined })
