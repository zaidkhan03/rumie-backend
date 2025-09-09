import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductBubbleUpdateEnvelopeInput } from '../product-bubble/product-bubble-update-envelope.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';

@InputType()
export class DealOfferBubbleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    headerText?: StringFieldUpdateOperationsInput;

    @Field(() => ProductBubbleUpdateEnvelopeInput, {nullable:true})
    product?: ProductBubbleUpdateEnvelopeInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    offerPrice?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    shippingFee?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalPrice?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sellerAddressId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    buyerAddressId?: StringFieldUpdateOperationsInput;
}
