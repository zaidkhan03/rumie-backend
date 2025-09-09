import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryReactionWhereInput } from './story-reaction-where.input';
import { Type } from 'class-transformer';
import { StoryReactionOrderByWithAggregationInput } from './story-reaction-order-by-with-aggregation.input';
import { StoryReactionScalarFieldEnum } from './story-reaction-scalar-field.enum';
import { StoryReactionScalarWhereWithAggregatesInput } from './story-reaction-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { StoryReactionCountAggregateInput } from './story-reaction-count-aggregate.input';
import { StoryReactionMinAggregateInput } from './story-reaction-min-aggregate.input';
import { StoryReactionMaxAggregateInput } from './story-reaction-max-aggregate.input';

@ArgsType()
export class StoryReactionGroupByArgs {

    @Field(() => StoryReactionWhereInput, {nullable:true})
    @Type(() => StoryReactionWhereInput)
    where?: StoryReactionWhereInput;

    @Field(() => [StoryReactionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StoryReactionOrderByWithAggregationInput>;

    @Field(() => [StoryReactionScalarFieldEnum], {nullable:false})
    by!: Array<`${StoryReactionScalarFieldEnum}`>;

    @Field(() => StoryReactionScalarWhereWithAggregatesInput, {nullable:true})
    having?: StoryReactionScalarWhereWithAggregatesInput;

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
