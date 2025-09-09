import { registerEnumType } from '@nestjs/graphql';

export enum PromoCodeType {
    FIXED_VALUE = "FIXED_VALUE",
    PERCENTAGE = "PERCENTAGE"
}


registerEnumType(PromoCodeType, { name: 'PromoCodeType', description: undefined })
