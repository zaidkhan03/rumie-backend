import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumProductListingTypeFieldUpdateOperationsInput } from '../prisma/enum-product-listing-type-field-update-operations.input';
import { MediaItemCreateInput } from '../media-item/media-item-create.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { EnumProductConditionFieldUpdateOperationsInput } from '../prisma/enum-product-condition-field-update-operations.input';
import { NullableEnumProductDeliveryModeFieldUpdateOperationsInput } from '../prisma/nullable-enum-product-delivery-mode-field-update-operations.input';
import { NullableEnumShippingChargePayerFieldUpdateOperationsInput } from '../prisma/nullable-enum-shipping-charge-payer-field-update-operations.input';
import { RentingPreferenceNullableUpdateEnvelopeInput } from '../prisma/renting-preference-nullable-update-envelope.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableEnumPreferredGenderFieldUpdateOperationsInput } from '../prisma/nullable-enum-preferred-gender-field-update-operations.input';
import { ProductCategoryUpdateOneWithoutProductListingsNestedInput } from '../product-category/product-category-update-one-without-product-listings-nested.input';
import { BrandUpdateOneWithoutProductListingNestedInput } from '../brand/brand-update-one-without-product-listing-nested.input';
import { ColorUpdateOneWithoutProductListingNestedInput } from '../color/color-update-one-without-product-listing-nested.input';
import { WeightCategoryUpdateOneWithoutProductListingNestedInput } from '../weight-category/weight-category-update-one-without-product-listing-nested.input';
import { UserUpdateOneRequiredWithoutProductListingsNestedInput } from '../user/user-update-one-required-without-product-listings-nested.input';
import { ConversationUpdateManyWithoutProductNestedInput } from '../conversation/conversation-update-many-without-product-nested.input';
import { ProductReportUpdateManyWithoutProductNestedInput } from '../product-report/product-report-update-many-without-product-nested.input';
import { EduInstituteUpdateOneWithoutProductListingsNestedInput } from '../edu-institute/edu-institute-update-one-without-product-listings-nested.input';

@InputType()
export class ProductListingUpdateWithoutWishlistedByInput {

    @Field(() => EnumProductListingTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumProductListingTypeFieldUpdateOperationsInput;

    @Field(() => [MediaItemCreateInput], {nullable:true})
    media?: Array<MediaItemCreateInput>;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    selectedCategoryFilters?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    extendedData?: any;

    @Field(() => EnumProductConditionFieldUpdateOperationsInput, {nullable:true})
    productCondition?: EnumProductConditionFieldUpdateOperationsInput;

    @Field(() => NullableEnumProductDeliveryModeFieldUpdateOperationsInput, {nullable:true})
    productDeliveryMode?: NullableEnumProductDeliveryModeFieldUpdateOperationsInput;

    @Field(() => NullableEnumShippingChargePayerFieldUpdateOperationsInput, {nullable:true})
    shippingChargePayer?: NullableEnumShippingChargePayerFieldUpdateOperationsInput;

    @Field(() => RentingPreferenceNullableUpdateEnvelopeInput, {nullable:true})
    rentingPreference?: RentingPreferenceNullableUpdateEnvelopeInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    priceString?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reasonForSelling?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    shippingEnabled?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    shippingFrom?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    soldOut?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    blackListed?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    legacyHash?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    archived?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableEnumPreferredGenderFieldUpdateOperationsInput, {nullable:true})
    categoryPreferredGender?: NullableEnumPreferredGenderFieldUpdateOperationsInput;

    @Field(() => ProductCategoryUpdateOneWithoutProductListingsNestedInput, {nullable:true})
    category?: ProductCategoryUpdateOneWithoutProductListingsNestedInput;

    @Field(() => BrandUpdateOneWithoutProductListingNestedInput, {nullable:true})
    brand?: BrandUpdateOneWithoutProductListingNestedInput;

    @Field(() => ColorUpdateOneWithoutProductListingNestedInput, {nullable:true})
    color?: ColorUpdateOneWithoutProductListingNestedInput;

    @Field(() => WeightCategoryUpdateOneWithoutProductListingNestedInput, {nullable:true})
    weightCategory?: WeightCategoryUpdateOneWithoutProductListingNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutProductListingsNestedInput, {nullable:true})
    uploader?: UserUpdateOneRequiredWithoutProductListingsNestedInput;

    @Field(() => ConversationUpdateManyWithoutProductNestedInput, {nullable:true})
    conversations?: ConversationUpdateManyWithoutProductNestedInput;

    @Field(() => ProductReportUpdateManyWithoutProductNestedInput, {nullable:true})
    reports?: ProductReportUpdateManyWithoutProductNestedInput;

    @Field(() => EduInstituteUpdateOneWithoutProductListingsNestedInput, {nullable:true})
    uploaderEduInstitute?: EduInstituteUpdateOneWithoutProductListingsNestedInput;
}
