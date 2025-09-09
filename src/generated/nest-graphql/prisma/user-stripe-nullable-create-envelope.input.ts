import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStripeCreateInput } from '../user-stripe/user-stripe-create.input';
import { Type } from 'class-transformer';

@InputType()
export class UserStripeNullableCreateEnvelopeInput {

    @Field(() => UserStripeCreateInput, {nullable:true})
    @Type(() => UserStripeCreateInput)
    set?: UserStripeCreateInput;
}
