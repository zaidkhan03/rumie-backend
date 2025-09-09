import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryPayloadWhereInput } from './story-payload-where.input';
import { Type } from 'class-transformer';
import { StoryPayloadOrderByWithAggregationInput } from './story-payload-order-by-with-aggregation.input';
import { StoryPayloadScalarFieldEnum } from './story-payload-scalar-field.enum';
import { StoryPayloadScalarWhereWithAggregatesInput } from './story-payload-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { StoryPayloadCountAggregateInput } from './story-payload-count-aggregate.input';
import { StoryPayloadMinAggregateInput } from './story-payload-min-aggregate.input';
import { StoryPayloadMaxAggregateInput } from './story-payload-max-aggregate.input';

@ArgsType()
export class StoryPayloadGroupByArgs {

    @Field(() => StoryPayloadWhereInput, {nullable:true})
    @Type(() => StoryPayloadWhereInput)
    where?: StoryPayloadWhereInput;

    @Field(() => [StoryPayloadOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StoryPayloadOrderByWithAggregationInput>;

    @Field(() => [StoryPayloadScalarFieldEnum], {nullable:false})
    by!: Array<`${StoryPayloadScalarFieldEnum}`>;

    @Field(() => StoryPayloadScalarWhereWithAggregatesInput, {nullable:true})
    having?: StoryPayloadScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StoryPayloadCountAggregateInput, {nullable:true})
    _count?: StoryPayloadCountAggregateInput;

    @Field(() => StoryPayloadMinAggregateInput, {nullable:true})
    _min?: StoryPayloadMinAggregateInput;

    @Field(() => StoryPayloadMaxAggregateInput, {nullable:true})
    _max?: StoryPayloadMaxAggregateInput;
}
