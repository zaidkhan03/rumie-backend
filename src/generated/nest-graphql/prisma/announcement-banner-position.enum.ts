import { registerEnumType } from '@nestjs/graphql';

export enum AnnouncementBannerPosition {
    HOME_PAGE = "HOME_PAGE",
    HOME_PAGE_TOP = "HOME_PAGE_TOP",
    HOME_PAGE_BOTTOM = "HOME_PAGE_BOTTOM",
    PRODUCT_DETAIL_PAGE = "PRODUCT_DETAIL_PAGE"
}


registerEnumType(AnnouncementBannerPosition, { name: 'AnnouncementBannerPosition', description: undefined })
