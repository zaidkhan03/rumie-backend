import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageCountOrderByAggregateInput } from './message-count-order-by-aggregate.input';
import { MessageMaxOrderByAggregateInput } from './message-max-order-by-aggregate.input';
import { MessageMinOrderByAggregateInput } from './message-min-order-by-aggregate.input';

@InputType()
export class MessageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    clientId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    senderId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    payload?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    state?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    conversationId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => MessageCountOrderByAggregateInput, {nullable:true})
    _count?: MessageCountOrderByAggregateInput;

    @Field(() => MessageMaxOrderByAggregateInput, {nullable:true})
    _max?: MessageMaxOrderByAggregateInput;

    @Field(() => MessageMinOrderByAggregateInput, {nullable:true})
    _min?: MessageMinOrderByAggregateInput;
}
