import { registerEnumType } from '@nestjs/graphql';

export enum AppPopupTemplate {
    WITHOUT_COUPON = "WITHOUT_COUPON",
    WITH_COUPON = "WITH_COUPON"
}


registerEnumType(AppPopupTemplate, { name: 'AppPopupTemplate', description: undefined })
