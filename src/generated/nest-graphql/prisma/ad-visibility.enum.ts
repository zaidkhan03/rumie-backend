import { registerEnumType } from '@nestjs/graphql';

export enum AdVisibility {
    LISTING_CARDS = "LISTING_CARDS",
    BANNER_SINGLE = "BANNER_SINGLE",
    BANNER_SLIDER = "BANNER_SLIDER"
}


registerEnumType(AdVisibility, { name: 'AdVisibility', description: undefined })
