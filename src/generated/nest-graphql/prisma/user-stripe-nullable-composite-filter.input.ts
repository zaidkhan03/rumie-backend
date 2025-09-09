import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStripeObjectEqualityInput } from './user-stripe-object-equality.input';
import { UserStripeWhereInput } from '../user-stripe/user-stripe-where.input';

@InputType()
export class UserStripeNullableCompositeFilter {

    @Field(() => UserStripeObjectEqualityInput, {nullable:true})
    equals?: UserStripeObjectEqualityInput;

    @Field(() => UserStripeWhereInput, {nullable:true})
    is?: UserStripeWhereInput;

    @Field(() => UserStripeWhereInput, {nullable:true})
    isNot?: UserStripeWhereInput;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
