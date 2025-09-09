import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentOrderCreateinitialImagesInput } from './rent-order-createinitial-images.input';
import { RentOrderCreatecompletionImagesInput } from './rent-order-createcompletion-images.input';

@InputType()
export class RentOrderCreateInput {

    @Field(() => String, {nullable:true})
    startDate?: string;

    @Field(() => String, {nullable:true})
    endDate?: string;

    @Field(() => RentOrderCreateinitialImagesInput, {nullable:true})
    initialImages?: RentOrderCreateinitialImagesInput;

    @Field(() => RentOrderCreatecompletionImagesInput, {nullable:true})
    completionImages?: RentOrderCreatecompletionImagesInput;
}
