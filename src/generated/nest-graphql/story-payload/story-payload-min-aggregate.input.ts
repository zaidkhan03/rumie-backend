import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StoryPayloadMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
