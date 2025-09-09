import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserStripe {

    @Field(() => String, {nullable:true})
    customerId!: string | null;

    @Field(() => String, {nullable:true})
    expressAccountId!: string | null;

    @Field(() => Boolean, {nullable:true})
    onboardingComplete!: boolean | null;
}
