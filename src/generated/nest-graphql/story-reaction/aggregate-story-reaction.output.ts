import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StoryReactionCountAggregate } from './story-reaction-count-aggregate.output';
import { StoryReactionMinAggregate } from './story-reaction-min-aggregate.output';
import { StoryReactionMaxAggregate } from './story-reaction-max-aggregate.output';

@ObjectType()
export class AggregateStoryReaction {

    @Field(() => StoryReactionCountAggregate, {nullable:true})
    _count?: StoryReactionCountAggregate;

    @Field(() => StoryReactionMinAggregate, {nullable:true})
    _min?: StoryReactionMinAggregate;

    @Field(() => StoryReactionMaxAggregate, {nullable:true})
    _max?: StoryReactionMaxAggregate;
}
