import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WeightCategorySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    shippingFee?: true;
}
