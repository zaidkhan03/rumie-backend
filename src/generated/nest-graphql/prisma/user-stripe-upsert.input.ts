import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStripeCreateInput } from '../user-stripe/user-stripe-create.input';
import { Type } from 'class-transformer';
import { UserStripeUpdateInput } from '../user-stripe/user-stripe-update.input';

@InputType()
export class UserStripeUpsertInput {

    @Field(() => UserStripeCreateInput, {nullable:false})
    @Type(() => UserStripeCreateInput)
    set!: UserStripeCreateInput;

    @Field(() => UserStripeUpdateInput, {nullable:false})
    @Type(() => UserStripeUpdateInput)
    update!: UserStripeUpdateInput;
}
