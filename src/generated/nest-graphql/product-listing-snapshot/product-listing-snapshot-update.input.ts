import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { MediaItemCreateInput } from '../media-item/media-item-create.input';
import { EnumProductDeliveryModeFieldUpdateOperationsInput } from '../prisma/enum-product-delivery-mode-field-update-operations.input';
import { EnumProductListingTypeFieldUpdateOperationsInput } from '../prisma/enum-product-listing-type-field-update-operations.input';
import { PackageWeightNullableUpdateEnvelopeInput } from '../prisma/package-weight-nullable-update-envelope.input';
import { PackageDimensionsNullableUpdateEnvelopeInput } from '../prisma/package-dimensions-nullable-update-envelope.input';

@InputType()
export class ProductListingSnapshotUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    price?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productCondition?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    colorName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    brandName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => [MediaItemCreateInput], {nullable:true})
    media?: Array<MediaItemCreateInput>;

    @Field(() => EnumProductDeliveryModeFieldUpdateOperationsInput, {nullable:true})
    deliveryMode?: EnumProductDeliveryModeFieldUpdateOperationsInput;

    @Field(() => EnumProductListingTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumProductListingTypeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    shippingFrom?: NullableStringFieldUpdateOperationsInput;

    @Field(() => PackageWeightNullableUpdateEnvelopeInput, {nullable:true})
    packageWeight?: PackageWeightNullableUpdateEnvelopeInput;

    @Field(() => PackageDimensionsNullableUpdateEnvelopeInput, {nullable:true})
    packageDimensions?: PackageDimensionsNullableUpdateEnvelopeInput;
}
