import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';

@InputType()
export class UserStripeWhereInput {

    @Field(() => [UserStripeWhereInput], {nullable:true})
    AND?: Array<UserStripeWhereInput>;

    @Field(() => [UserStripeWhereInput], {nullable:true})
    OR?: Array<UserStripeWhereInput>;

    @Field(() => [UserStripeWhereInput], {nullable:true})
    NOT?: Array<UserStripeWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    customerId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    expressAccountId?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    onboardingComplete?: BoolNullableFilter;
}
