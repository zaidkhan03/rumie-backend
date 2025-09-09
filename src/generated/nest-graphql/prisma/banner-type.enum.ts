import { registerEnumType } from '@nestjs/graphql';

export enum BannerType {
    SINGLE = "SINGLE",
    SLIDER = "SLIDER"
}


registerEnumType(BannerType, { name: 'BannerType', description: undefined })
