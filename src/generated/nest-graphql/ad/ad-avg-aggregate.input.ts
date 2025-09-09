import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    monthlyBudget?: true;

    @Field(() => Boolean, {nullable:true})
    priority?: true;
}
