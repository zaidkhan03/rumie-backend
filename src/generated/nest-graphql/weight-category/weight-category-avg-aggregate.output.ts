import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class WeightCategoryAvgAggregate {

    @Field(() => Float, {nullable:true})
    shippingFee?: number;
}
