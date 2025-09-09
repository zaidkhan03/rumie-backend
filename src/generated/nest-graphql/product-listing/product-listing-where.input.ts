import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumProductListingTypeFilter } from '../prisma/enum-product-listing-type-filter.input';
import { MediaItemObjectEqualityInput } from '../prisma/media-item-object-equality.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumProductConditionFilter } from '../prisma/enum-product-condition-filter.input';
import { EnumProductDeliveryModeNullableFilter } from '../prisma/enum-product-delivery-mode-nullable-filter.input';
import { EnumShippingChargePayerNullableFilter } from '../prisma/enum-shipping-charge-payer-nullable-filter.input';
import { RentingPreferenceNullableCompositeFilter } from '../prisma/renting-preference-nullable-composite-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { EnumPreferredGenderNullableFilter } from '../prisma/enum-preferred-gender-nullable-filter.input';
import { ProductCategoryNullableRelationFilter } from '../product-category/product-category-nullable-relation-filter.input';
import { BrandNullableRelationFilter } from '../brand/brand-nullable-relation-filter.input';
import { ColorNullableRelationFilter } from '../color/color-nullable-relation-filter.input';
import { WeightCategoryNullableRelationFilter } from '../weight-category/weight-category-nullable-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { ConversationListRelationFilter } from '../conversation/conversation-list-relation-filter.input';
import { ProductReportListRelationFilter } from '../product-report/product-report-list-relation-filter.input';
import { EduInstituteNullableRelationFilter } from '../edu-institute/edu-institute-nullable-relation-filter.input';

@InputType()
export class ProductListingWhereInput {

    @Field(() => [ProductListingWhereInput], {nullable:true})
    AND?: Array<ProductListingWhereInput>;

    @Field(() => [ProductListingWhereInput], {nullable:true})
    OR?: Array<ProductListingWhereInput>;

    @Field(() => [ProductListingWhereInput], {nullable:true})
    NOT?: Array<ProductListingWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumProductListingTypeFilter, {nullable:true})
    type?: EnumProductListingTypeFilter;

    @Field(() => [MediaItemObjectEqualityInput], {nullable:true})
    media?: Array<MediaItemObjectEqualityInput>;

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

    @Field(() => RentingPreferenceNullableCompositeFilter, {nullable:true})
    rentingPreference?: RentingPreferenceNullableCompositeFilter;

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

    @Field(() => ProductCategoryNullableRelationFilter, {nullable:true})
    category?: ProductCategoryNullableRelationFilter;

    @Field(() => BrandNullableRelationFilter, {nullable:true})
    brand?: BrandNullableRelationFilter;

    @Field(() => ColorNullableRelationFilter, {nullable:true})
    color?: ColorNullableRelationFilter;

    @Field(() => WeightCategoryNullableRelationFilter, {nullable:true})
    weightCategory?: WeightCategoryNullableRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    uploader?: UserRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    wishlistedBy?: UserListRelationFilter;

    @Field(() => ConversationListRelationFilter, {nullable:true})
    conversations?: ConversationListRelationFilter;

    @Field(() => ProductReportListRelationFilter, {nullable:true})
    reports?: ProductReportListRelationFilter;

    @Field(() => EduInstituteNullableRelationFilter, {nullable:true})
    uploaderEduInstitute?: EduInstituteNullableRelationFilter;
}
