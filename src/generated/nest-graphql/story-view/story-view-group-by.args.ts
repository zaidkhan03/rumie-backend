import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryViewWhereInput } from './story-view-where.input';
import { Type } from 'class-transformer';
import { StoryViewOrderByWithAggregationInput } from './story-view-order-by-with-aggregation.input';
import { StoryViewScalarFieldEnum } from './story-view-scalar-field.enum';
import { StoryViewScalarWhereWithAggregatesInput } from './story-view-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { StoryViewCountAggregateInput } from './story-view-count-aggregate.input';
import { StoryViewMinAggregateInput } from './story-view-min-aggregate.input';
import { StoryViewMaxAggregateInput } from './story-view-max-aggregate.input';

@ArgsType()
export class StoryViewGroupByArgs {

    @Field(() => StoryViewWhereInput, {nullable:true})
    @Type(() => StoryViewWhereInput)
    where?: StoryViewWhereInput;

    @Field(() => [StoryViewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StoryViewOrderByWithAggregationInput>;

    @Field(() => [StoryViewScalarFieldEnum], {nullable:false})
    by!: Array<`${StoryViewScalarFieldEnum}`>;

    @Field(() => StoryViewScalarWhereWithAggregatesInput, {nullable:true})
    having?: StoryViewScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StoryViewCountAggregateInput, {nullable:true})
    _count?: StoryViewCountAggregateInput;

    @Field(() => StoryViewMinAggregateInput, {nullable:true})
    _min?: StoryViewMinAggregateInput;

    @Field(() => StoryViewMaxAggregateInput, {nullable:true})
    _max?: StoryViewMaxAggregateInput;
}
