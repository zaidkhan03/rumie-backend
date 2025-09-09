import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductBubbleUpdateEnvelopeInput } from '../product-bubble/product-bubble-update-envelope.input';
import { RentDateTimeUpdateEnvelopeInput } from '../rent-date-time/rent-date-time-update-envelope.input';

@InputType()
export class RentOfferBubbleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    headerText?: StringFieldUpdateOperationsInput;

    @Field(() => ProductBubbleUpdateEnvelopeInput, {nullable:true})
    product?: ProductBubbleUpdateEnvelopeInput;

    @Field(() => RentDateTimeUpdateEnvelopeInput, {nullable:true})
    start?: RentDateTimeUpdateEnvelopeInput;

    @Field(() => RentDateTimeUpdateEnvelopeInput, {nullable:true})
    end?: RentDateTimeUpdateEnvelopeInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    totalPrice?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    buyerFee?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    totalPriceWithBuyerFee?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    consideredWeeks?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    duration?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    deliveryMode?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    startDateTime?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    endDateTime?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userIdHavingAddress?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    addressIdSelected?: StringFieldUpdateOperationsInput;
}
