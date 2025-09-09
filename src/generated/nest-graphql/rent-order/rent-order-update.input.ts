import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { RentOrderUpdateinitialImagesInput } from './rent-order-updateinitial-images.input';
import { RentOrderUpdatecompletionImagesInput } from './rent-order-updatecompletion-images.input';

@InputType()
export class RentOrderUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    startDate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    endDate?: NullableStringFieldUpdateOperationsInput;

    @Field(() => RentOrderUpdateinitialImagesInput, {nullable:true})
    initialImages?: RentOrderUpdateinitialImagesInput;

    @Field(() => RentOrderUpdatecompletionImagesInput, {nullable:true})
    completionImages?: RentOrderUpdatecompletionImagesInput;
}
