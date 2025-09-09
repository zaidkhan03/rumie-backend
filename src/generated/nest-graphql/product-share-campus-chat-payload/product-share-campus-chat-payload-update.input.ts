import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { MediaItemUpdateEnvelopeInput } from '../media-item/media-item-update-envelope.input';
import { EnumProductListingTypeFieldUpdateOperationsInput } from '../prisma/enum-product-listing-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class ProductShareCampusChatPayloadUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    priceString?: StringFieldUpdateOperationsInput;

    @Field(() => MediaItemUpdateEnvelopeInput, {nullable:true})
    mediaItem?: MediaItemUpdateEnvelopeInput;

    @Field(() => EnumProductListingTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumProductListingTypeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    text?: NullableStringFieldUpdateOperationsInput;
}
