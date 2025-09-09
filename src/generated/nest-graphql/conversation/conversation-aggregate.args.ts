import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConversationWhereInput } from './conversation-where.input';
import { Type } from 'class-transformer';
import { ConversationOrderByWithRelationInput } from './conversation-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ConversationWhereUniqueInput } from './conversation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConversationCountAggregateInput } from './conversation-count-aggregate.input';
import { ConversationAvgAggregateInput } from './conversation-avg-aggregate.input';
import { ConversationSumAggregateInput } from './conversation-sum-aggregate.input';
import { ConversationMinAggregateInput } from './conversation-min-aggregate.input';
import { ConversationMaxAggregateInput } from './conversation-max-aggregate.input';

@ArgsType()
export class ConversationAggregateArgs {

    @Field(() => ConversationWhereInput, {nullable:true})
    @Type(() => ConversationWhereInput)
    where?: ConversationWhereInput;

    @Field(() => [ConversationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConversationOrderByWithRelationInput>;

    @Field(() => ConversationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ConversationWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ConversationCountAggregateInput, {nullable:true})
    _count?: ConversationCountAggregateInput;

    @Field(() => ConversationAvgAggregateInput, {nullable:true})
    _avg?: ConversationAvgAggregateInput;

    @Field(() => ConversationSumAggregateInput, {nullable:true})
    _sum?: ConversationSumAggregateInput;

    @Field(() => ConversationMinAggregateInput, {nullable:true})
    _min?: ConversationMinAggregateInput;

    @Field(() => ConversationMaxAggregateInput, {nullable:true})
    _max?: ConversationMaxAggregateInput;
}
