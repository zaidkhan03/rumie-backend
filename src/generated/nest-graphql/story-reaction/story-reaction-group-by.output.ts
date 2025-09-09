import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReactionType } from '../prisma/reaction-type.enum';
import { StoryReactionCountAggregate } from './story-reaction-count-aggregate.output';
import { StoryReactionMinAggregate } from './story-reaction-min-aggregate.output';
import { StoryReactionMaxAggregate } from './story-reaction-max-aggregate.output';

@ObjectType()
export class StoryReactionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    storyId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => String, {nullable:true})
    previousReactionId?: string;

    @Field(() => Date, {nullable:true})
    removedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => StoryReactionCountAggregate, {nullable:true})
    _count?: StoryReactionCountAggregate;

    @Field(() => StoryReactionMinAggregate, {nullable:true})
    _min?: StoryReactionMinAggregate;

    @Field(() => StoryReactionMaxAggregate, {nullable:true})
    _max?: StoryReactionMaxAggregate;
}
