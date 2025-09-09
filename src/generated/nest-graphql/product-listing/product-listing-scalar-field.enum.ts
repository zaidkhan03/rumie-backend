import { registerEnumType } from '@nestjs/graphql';

export enum ProductListingScalarFieldEnum {
    id = "id",
    type = "type",
    title = "title",
    categoryId = "categoryId",
    selectedCategoryFilters = "selectedCategoryFilters",
    extendedData = "extendedData",
    brandId = "brandId",
    colorId = "colorId",
    productCondition = "productCondition",
    productDeliveryMode = "productDeliveryMode",
    shippingChargePayer = "shippingChargePayer",
    weightCategoryId = "weightCategoryId",
    uploaderId = "uploaderId",
    price = "price",
    priceString = "priceString",
    description = "description",
    reasonForSelling = "reasonForSelling",
    shippingEnabled = "shippingEnabled",
    shippingFrom = "shippingFrom",
    active = "active",
    soldOut = "soldOut",
    blackListed = "blackListed",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    wishlistedUserIds = "wishlistedUserIds",
    legacyHash = "legacyHash",
    archived = "archived",
    categoryPreferredGender = "categoryPreferredGender",
    uploaderEduInstituteId = "uploaderEduInstituteId"
}


registerEnumType(ProductListingScalarFieldEnum, { name: 'ProductListingScalarFieldEnum', description: undefined })
