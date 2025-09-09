import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ListingSettingAvgAggregate {

    @Field(() => Float, {nullable:true})
    sellerFees?: number;

    @Field(() => Float, {nullable:true})
    taxes?: number;

    @Field(() => Float, {nullable:true})
    creditProcessing?: number;
}
