import { registerEnumType } from '@nestjs/graphql';

export enum ListingSettingScalarFieldEnum {
    id = "id",
    enableSelling = "enableSelling",
    enableRenting = "enableRenting",
    reasonsForSelling = "reasonsForSelling",
    meetupPreferences = "meetupPreferences",
    productDeliveryModes = "productDeliveryModes",
    sellerFees = "sellerFees",
    taxes = "taxes",
    creditProcessing = "creditProcessing",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ListingSettingScalarFieldEnum, { name: 'ListingSettingScalarFieldEnum', description: undefined })
