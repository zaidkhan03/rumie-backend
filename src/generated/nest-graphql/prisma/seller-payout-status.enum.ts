import { registerEnumType } from '@nestjs/graphql';

export enum SellerPayoutStatus {
    PENDING = "PENDING",
    COMPLETE = "COMPLETE",
    CANCELLED = "CANCELLED",
    SENT = "SENT"
}


registerEnumType(SellerPayoutStatus, { name: 'SellerPayoutStatus', description: undefined })
