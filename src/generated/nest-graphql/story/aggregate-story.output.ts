import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StoryCountAggregate } from './story-count-aggregate.output';
import { StoryAvgAggregate } from './story-avg-aggregate.output';
import { StorySumAggregate } from './story-sum-aggregate.output';
import { StoryMinAggregate } from './story-min-aggregate.output';
import { StoryMaxAggregate } from './story-max-aggregate.output';

@ObjectType()
export class AggregateStory {

    @Field(() => StoryCountAggregate, {nullable:true})
    _count?: StoryCountAggregate;

    @Field(() => StoryAvgAggregate, {nullable:true})
    _avg?: StoryAvgAggregate;

    @Field(() => StorySumAggregate, {nullable:true})
    _sum?: StorySumAggregate;

    @Field(() => StoryMinAggregate, {nullable:true})
    _min?: StoryMinAggregate;

    @Field(() => StoryMaxAggregate, {nullable:true})
    _max?: StoryMaxAggregate;
}
