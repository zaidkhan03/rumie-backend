import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatBubblesWhereInput } from './chat-bubbles-where.input';
import { Type } from 'class-transformer';
import { ChatBubblesOrderByWithRelationInput } from './chat-bubbles-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ChatBubblesWhereUniqueInput } from './chat-bubbles-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChatBubblesCountAggregateInput } from './chat-bubbles-count-aggregate.input';
import { ChatBubblesMinAggregateInput } from './chat-bubbles-min-aggregate.input';
import { ChatBubblesMaxAggregateInput } from './chat-bubbles-max-aggregate.input';

@ArgsType()
export class ChatBubblesAggregateArgs {

    @Field(() => ChatBubblesWhereInput, {nullable:true})
    @Type(() => ChatBubblesWhereInput)
    where?: ChatBubblesWhereInput;

    @Field(() => [ChatBubblesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChatBubblesOrderByWithRelationInput>;

    @Field(() => ChatBubblesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ChatBubblesWhereUniqueInput, 'id'>;

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
