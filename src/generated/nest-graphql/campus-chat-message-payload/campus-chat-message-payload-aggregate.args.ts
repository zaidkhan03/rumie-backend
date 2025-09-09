import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatMessagePayloadWhereInput } from './campus-chat-message-payload-where.input';
import { Type } from 'class-transformer';
import { CampusChatMessagePayloadOrderByWithRelationInput } from './campus-chat-message-payload-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CampusChatMessagePayloadWhereUniqueInput } from './campus-chat-message-payload-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CampusChatMessagePayloadCountAggregateInput } from './campus-chat-message-payload-count-aggregate.input';
import { CampusChatMessagePayloadMinAggregateInput } from './campus-chat-message-payload-min-aggregate.input';
import { CampusChatMessagePayloadMaxAggregateInput } from './campus-chat-message-payload-max-aggregate.input';

@ArgsType()
export class CampusChatMessagePayloadAggregateArgs {

    @Field(() => CampusChatMessagePayloadWhereInput, {nullable:true})
    @Type(() => CampusChatMessagePayloadWhereInput)
    where?: CampusChatMessagePayloadWhereInput;

    @Field(() => [CampusChatMessagePayloadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CampusChatMessagePayloadOrderByWithRelationInput>;

    @Field(() => CampusChatMessagePayloadWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CampusChatMessagePayloadWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CampusChatMessagePayloadCountAggregateInput, {nullable:true})
    _count?: CampusChatMessagePayloadCountAggregateInput;

    @Field(() => CampusChatMessagePayloadMinAggregateInput, {nullable:true})
    _min?: CampusChatMessagePayloadMinAggregateInput;

    @Field(() => CampusChatMessagePayloadMaxAggregateInput, {nullable:true})
    _max?: CampusChatMessagePayloadMaxAggregateInput;
}
