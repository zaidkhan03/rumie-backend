import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class WeightCategorySumAggregate {

    @Field(() => Float, {nullable:true})
    shippingFee?: number;
}
