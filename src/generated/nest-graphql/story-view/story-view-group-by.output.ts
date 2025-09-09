import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StoryViewCountAggregate } from './story-view-count-aggregate.output';
import { StoryViewMinAggregate } from './story-view-min-aggregate.output';
import { StoryViewMaxAggregate } from './story-view-max-aggregate.output';

@ObjectType()
export class StoryViewGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    storyId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => StoryViewCountAggregate, {nullable:true})
    _count?: StoryViewCountAggregate;

    @Field(() => StoryViewMinAggregate, {nullable:true})
    _min?: StoryViewMinAggregate;

    @Field(() => StoryViewMaxAggregate, {nullable:true})
    _max?: StoryViewMaxAggregate;
}
