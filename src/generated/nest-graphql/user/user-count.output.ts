import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    shoppingPreferences?: number;

    @Field(() => Int, {nullable:false})
    hobbies?: number;

    @Field(() => Int, {nullable:false})
    productListings?: number;

    @Field(() => Int, {nullable:false})
    reportedProducts?: number;

    @Field(() => Int, {nullable:false})
    wishlist?: number;

    @Field(() => Int, {nullable:false})
    savedDeals?: number;

    @Field(() => Int, {nullable:false})
    conversations?: number;

    @Field(() => Int, {nullable:false})
    followedBy?: number;

    @Field(() => Int, {nullable:false})
    following?: number;
}
