import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryReactionWhereInput } from './story-reaction-where.input';
import { Type } from 'class-transformer';
import { StoryReactionOrderByWithRelationInput } from './story-reaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { StoryReactionWhereUniqueInput } from './story-reaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StoryReactionCountAggregateInput } from './story-reaction-count-aggregate.input';
import { StoryReactionMinAggregateInput } from './story-reaction-min-aggregate.input';
import { StoryReactionMaxAggregateInput } from './story-reaction-max-aggregate.input';

@ArgsType()
export class StoryReactionAggregateArgs {

    @Field(() => StoryReactionWhereInput, {nullable:true})
    @Type(() => StoryReactionWhereInput)
    where?: StoryReactionWhereInput;

    @Field(() => [StoryReactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoryReactionOrderByWithRelationInput>;

    @Field(() => StoryReactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StoryReactionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StoryReactionCountAggregateInput, {nullable:true})
    _count?: StoryReactionCountAggregateInput;

    @Field(() => StoryReactionMinAggregateInput, {nullable:true})
    _min?: StoryReactionMinAggregateInput;

    @Field(() => StoryReactionMaxAggregateInput, {nullable:true})
    _max?: StoryReactionMaxAggregateInput;
}
