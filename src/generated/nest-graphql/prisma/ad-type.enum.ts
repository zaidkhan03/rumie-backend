import { registerEnumType } from '@nestjs/graphql';

export enum AdType {
    LISTING_CARD = "LISTING_CARD",
    BANNER = "BANNER"
}


registerEnumType(AdType, { name: 'AdType', description: undefined })
