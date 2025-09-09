import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserStripeObjectEqualityInput {

    @Field(() => String, {nullable:true})
    customerId?: string;

    @Field(() => String, {nullable:true})
    expressAccountId?: string;

    @Field(() => Boolean, {nullable:true})
    onboardingComplete?: boolean;
}
