import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StoryAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    viewCount?: true;
}
