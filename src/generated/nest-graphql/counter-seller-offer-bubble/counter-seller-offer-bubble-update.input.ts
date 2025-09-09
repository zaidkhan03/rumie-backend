import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';

@InputType()
export class CounterSellerOfferBubbleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    headerText?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    offerPrice?: FloatFieldUpdateOperationsInput;
}
