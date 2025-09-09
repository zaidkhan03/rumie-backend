import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductListingCount {

    @Field(() => Int, {nullable:false})
    wishlistedBy?: number;

    @Field(() => Int, {nullable:false})
    conversations?: number;

    @Field(() => Int, {nullable:false})
    reports?: number;
}
