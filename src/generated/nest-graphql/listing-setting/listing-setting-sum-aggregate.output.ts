import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ListingSettingSumAggregate {

    @Field(() => Int, {nullable:true})
    sellerFees?: number;

    @Field(() => Int, {nullable:true})
    taxes?: number;

    @Field(() => Int, {nullable:true})
    creditProcessing?: number;
}
