import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumProductListingTypeFilter } from '../prisma/enum-product-listing-type-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumProductConditionFilter } from '../prisma/enum-product-condition-filter.input';
import { EnumProductDeliveryModeNullableFilter } from '../prisma/enum-product-delivery-mode-nullable-filter.input';
import { EnumShippingChargePayerNullableFilter } from '../prisma/enum-shipping-charge-payer-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { EnumPreferredGenderNullableFilter } from '../prisma/enum-preferred-gender-nullable-filter.input';

@InputType()
export class ProductListingScalarWhereInput {

    @Field(() => [ProductListingScalarWhereInput], {nullable:true})
    AND?: Array<ProductListingScalarWhereInput>;

    @Field(() => [ProductListingScalarWhereInput], {nullable:true})
    OR?: Array<ProductListingScalarWhereInput>;

    @Field(() => [ProductListingScalarWhereInput], {nullable:true})
    NOT?: Array<ProductListingScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumProductListingTypeFilter, {nullable:true})
    type?: EnumProductListingTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    selectedCategoryFilters?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    extendedData?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    brandId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    colorId?: StringNullableFilter;

    @Field(() => EnumProductConditionFilter, {nullable:true})
    productCondition?: EnumProductConditionFilter;

    @Field(() => EnumProductDeliveryModeNullableFilter, {nullable:true})
    productDeliveryMode?: EnumProductDeliveryModeNullableFilter;

    @Field(() => EnumShippingChargePayerNullableFilter, {nullable:true})
    shippingChargePayer?: EnumShippingChargePayerNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    weightCategoryId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    uploaderId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    price?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    priceString?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    reasonForSelling?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    shippingEnabled?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    shippingFrom?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    soldOut?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    blackListed?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    wishlistedUserIds?: StringNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    legacyHash?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    archived?: BoolFilter;

    @Field(() => EnumPreferredGenderNullableFilter, {nullable:true})
    categoryPreferredGender?: EnumPreferredGenderNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    uploaderEduInstituteId?: StringNullableFilter;
}
