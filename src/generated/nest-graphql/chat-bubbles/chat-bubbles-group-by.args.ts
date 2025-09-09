import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatBubblesWhereInput } from './chat-bubbles-where.input';
import { Type } from 'class-transformer';
import { ChatBubblesOrderByWithAggregationInput } from './chat-bubbles-order-by-with-aggregation.input';
import { ChatBubblesScalarFieldEnum } from './chat-bubbles-scalar-field.enum';
import { ChatBubblesScalarWhereWithAggregatesInput } from './chat-bubbles-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ChatBubblesCountAggregateInput } from './chat-bubbles-count-aggregate.input';
import { ChatBubblesMinAggregateInput } from './chat-bubbles-min-aggregate.input';
import { ChatBubblesMaxAggregateInput } from './chat-bubbles-max-aggregate.input';

@ArgsType()
export class ChatBubblesGroupByArgs {

    @Field(() => ChatBubblesWhereInput, {nullable:true})
    @Type(() => ChatBubblesWhereInput)
    where?: ChatBubblesWhereInput;

    @Field(() => [ChatBubblesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ChatBubblesOrderByWithAggregationInput>;

    @Field(() => [ChatBubblesScalarFieldEnum], {nullable:false})
    by!: Array<`${ChatBubblesScalarFieldEnum}`>;

    @Field(() => ChatBubblesScalarWhereWithAggregatesInput, {nullable:true})
    having?: ChatBubblesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ChatBubblesCountAggregateInput, {nullable:true})
    _count?: ChatBubblesCountAggregateInput;

    @Field(() => ChatBubblesMinAggregateInput, {nullable:true})
    _min?: ChatBubblesMinAggregateInput;

    @Field(() => ChatBubblesMaxAggregateInput, {nullable:true})
    _max?: ChatBubblesMaxAggregateInput;
}
