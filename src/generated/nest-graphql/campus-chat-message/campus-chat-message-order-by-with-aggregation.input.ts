import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CampusChatMessageCountOrderByAggregateInput } from './campus-chat-message-count-order-by-aggregate.input';
import { CampusChatMessageAvgOrderByAggregateInput } from './campus-chat-message-avg-order-by-aggregate.input';
import { CampusChatMessageMaxOrderByAggregateInput } from './campus-chat-message-max-order-by-aggregate.input';
import { CampusChatMessageMinOrderByAggregateInput } from './campus-chat-message-min-order-by-aggregate.input';
import { CampusChatMessageSumOrderByAggregateInput } from './campus-chat-message-sum-order-by-aggregate.input';

@InputType()
export class CampusChatMessageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    chatId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    clientId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    reportCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    flagged?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    flaggedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    flaggedBy?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => CampusChatMessageCountOrderByAggregateInput, {nullable:true})
    _count?: CampusChatMessageCountOrderByAggregateInput;

    @Field(() => CampusChatMessageAvgOrderByAggregateInput, {nullable:true})
    _avg?: CampusChatMessageAvgOrderByAggregateInput;

    @Field(() => CampusChatMessageMaxOrderByAggregateInput, {nullable:true})
    _max?: CampusChatMessageMaxOrderByAggregateInput;

    @Field(() => CampusChatMessageMinOrderByAggregateInput, {nullable:true})
    _min?: CampusChatMessageMinOrderByAggregateInput;

    @Field(() => CampusChatMessageSumOrderByAggregateInput, {nullable:true})
    _sum?: CampusChatMessageSumOrderByAggregateInput;
}
