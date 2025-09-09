import { registerEnumType } from '@nestjs/graphql';

export enum ShippingChargePayer {
    BUYER = "BUYER",
    SELLER = "SELLER"
}


registerEnumType(ShippingChargePayer, { name: 'ShippingChargePayer', description: undefined })
