import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AppPopupAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    frequency?: true;

    @Field(() => Boolean, {nullable:true})
    delayInSeconds?: true;
}
