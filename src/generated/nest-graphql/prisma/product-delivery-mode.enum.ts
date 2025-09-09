import { registerEnumType } from '@nestjs/graphql';

export enum ProductDeliveryMode {
    DROP_TO_BUYER = "DROP_TO_BUYER",
    ASK_BUYER_TO_PICK = "ASK_BUYER_TO_PICK",
    MEET_AT_PUBLIC_PLACE = "MEET_AT_PUBLIC_PLACE"
}


registerEnumType(ProductDeliveryMode, { name: 'ProductDeliveryMode', description: undefined })
