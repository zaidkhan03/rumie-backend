import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStripeCreateInput } from '../user-stripe/user-stripe-create.input';
import { Type } from 'class-transformer';
import { UserStripeUpsertInput } from './user-stripe-upsert.input';

@InputType()
export class UserStripeNullableUpdateEnvelopeInput {

    @Field(() => UserStripeCreateInput, {nullable:true})
    @Type(() => UserStripeCreateInput)
    set?: UserStripeCreateInput;

    @Field(() => UserStripeUpsertInput, {nullable:true})
    @Type(() => UserStripeUpsertInput)
    upsert?: UserStripeUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
