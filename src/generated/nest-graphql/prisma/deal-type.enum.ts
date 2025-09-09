import { registerEnumType } from '@nestjs/graphql';

export enum DealType {
    WITH_COUPON = "WITH_COUPON",
    WITHOUT_COUPON = "WITHOUT_COUPON"
}


registerEnumType(DealType, { name: 'DealType', description: undefined })
