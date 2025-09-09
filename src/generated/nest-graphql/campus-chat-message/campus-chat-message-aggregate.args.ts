import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatMessageWhereInput } from './campus-chat-message-where.input';
import { Type } from 'class-transformer';
import { CampusChatMessageOrderByWithRelationInput } from './campus-chat-message-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CampusChatMessageWhereUniqueInput } from './campus-chat-message-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CampusChatMessageCountAggregateInput } from './campus-chat-message-count-aggregate.input';
import { CampusChatMessageAvgAggregateInput } from './campus-chat-message-avg-aggregate.input';
import { CampusChatMessageSumAggregateInput } from './campus-chat-message-sum-aggregate.input';
import { CampusChatMessageMinAggregateInput } from './campus-chat-message-min-aggregate.input';
import { CampusChatMessageMaxAggregateInput } from './campus-chat-message-max-aggregate.input';

@ArgsType()
export class CampusChatMessageAggregateArgs {

    @Field(() => CampusChatMessageWhereInput, {nullable:true})
    @Type(() => CampusChatMessageWhereInput)
    where?: CampusChatMessageWhereInput;

    @Field(() => [CampusChatMessageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CampusChatMessageOrderByWithRelationInput>;

    @Field(() => CampusChatMessageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CampusChatMessageWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CampusChatMessageCountAggregateInput, {nullable:true})
    _count?: CampusChatMessageCountAggregateInput;

    @Field(() => CampusChatMessageAvgAggregateInput, {nullable:true})
    _avg?: CampusChatMessageAvgAggregateInput;

    @Field(() => CampusChatMessageSumAggregateInput, {nullable:true})
    _sum?: CampusChatMessageSumAggregateInput;

    @Field(() => CampusChatMessageMinAggregateInput, {nullable:true})
    _min?: CampusChatMessageMinAggregateInput;

    @Field(() => CampusChatMessageMaxAggregateInput, {nullable:true})
    _max?: CampusChatMessageMaxAggregateInput;
}
