import { registerEnumType } from '@nestjs/graphql';

export enum ProductListingType {
    SALE = "SALE",
    RENT = "RENT"
}


registerEnumType(ProductListingType, { name: 'ProductListingType', description: undefined })
