import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CampusChatMessageAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    reportCount?: true;
}
