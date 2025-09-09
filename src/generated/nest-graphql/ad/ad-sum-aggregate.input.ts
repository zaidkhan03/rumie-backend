import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    monthlyBudget?: true;

    @Field(() => Boolean, {nullable:true})
    priority?: true;
}
