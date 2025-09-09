import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumProductListingTypeWithAggregatesFilter } from '../prisma/enum-product-listing-type-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumProductConditionWithAggregatesFilter } from '../prisma/enum-product-condition-with-aggregates-filter.input';
import { EnumProductDeliveryModeNullableWithAggregatesFilter } from '../prisma/enum-product-delivery-mode-nullable-with-aggregates-filter.input';
import { EnumShippingChargePayerNullableWithAggregatesFilter } from '../prisma/enum-shipping-charge-payer-nullable-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { EnumPreferredGenderNullableWithAggregatesFilter } from '../prisma/enum-preferred-gender-nullable-with-aggregates-filter.input';

@InputType()
export class ProductListingScalarWhereWithAggregatesInput {

    @Field(() => [ProductListingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductListingScalarWhereWithAggregatesInput>;

    @Field(() => [ProductListingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductListingScalarWhereWithAggregatesInput>;

    @Field(() => [ProductListingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductListingScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumProductListingTypeWithAggregatesFilter, {nullable:true})
    type?: EnumProductListingTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    categoryId?: StringWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    selectedCategoryFilters?: JsonNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    extendedData?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    brandId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    colorId?: StringNullableWithAggregatesFilter;

    @Field(() => EnumProductConditionWithAggregatesFilter, {nullable:true})
    productCondition?: EnumProductConditionWithAggregatesFilter;

    @Field(() => EnumProductDeliveryModeNullableWithAggregatesFilter, {nullable:true})
    productDeliveryMode?: EnumProductDeliveryModeNullableWithAggregatesFilter;

    @Field(() => EnumShippingChargePayerNullableWithAggregatesFilter, {nullable:true})
    shippingChargePayer?: EnumShippingChargePayerNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    weightCategoryId?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    uploaderId?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    price?: FloatWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    priceString?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    reasonForSelling?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    shippingEnabled?: BoolWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    shippingFrom?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    soldOut?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    blackListed?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    wishlistedUserIds?: StringNullableListFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    legacyHash?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    archived?: BoolWithAggregatesFilter;

    @Field(() => EnumPreferredGenderNullableWithAggregatesFilter, {nullable:true})
    categoryPreferredGender?: EnumPreferredGenderNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    uploaderEduInstituteId?: StringNullableWithAggregatesFilter;
}
