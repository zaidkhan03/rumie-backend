import { registerEnumType } from '@nestjs/graphql';

export enum InternalCTA {
    REFERRAL = "REFERRAL",
    DEALS = "DEALS",
    MARKETPLACE = "MARKETPLACE",
    RENTAL = "RENTAL",
    USER_PROFILE = "USER_PROFILE",
    UPLOAD_PRODUCT = "UPLOAD_PRODUCT",
    EVENT_TICKETS_CATEGORY = "EVENT_TICKETS_CATEGORY"
}


registerEnumType(InternalCTA, { name: 'InternalCTA', description: undefined })
