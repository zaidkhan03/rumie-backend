import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StoryPayloadCountAggregate } from './story-payload-count-aggregate.output';
import { StoryPayloadMinAggregate } from './story-payload-min-aggregate.output';
import { StoryPayloadMaxAggregate } from './story-payload-max-aggregate.output';

@ObjectType()
export class StoryPayloadGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => StoryPayloadCountAggregate, {nullable:true})
    _count?: StoryPayloadCountAggregate;

    @Field(() => StoryPayloadMinAggregate, {nullable:true})
    _min?: StoryPayloadMinAggregate;

    @Field(() => StoryPayloadMaxAggregate, {nullable:true})
    _max?: StoryPayloadMaxAggregate;
}
