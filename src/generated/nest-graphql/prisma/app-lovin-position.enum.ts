import { registerEnumType } from '@nestjs/graphql';

export enum AppLovinPosition {
    HOME_PAGE_BANNER = "HOME_PAGE_BANNER",
    PRODUCT_PAGE_BANNER = "PRODUCT_PAGE_BANNER",
    SELLER_PAGE_BANNER = "SELLER_PAGE_BANNER"
}


registerEnumType(AppLovinPosition, { name: 'AppLovinPosition', description: undefined })
