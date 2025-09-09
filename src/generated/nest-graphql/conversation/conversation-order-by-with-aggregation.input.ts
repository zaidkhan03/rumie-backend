import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ConversationCountOrderByAggregateInput } from './conversation-count-order-by-aggregate.input';
import { ConversationAvgOrderByAggregateInput } from './conversation-avg-order-by-aggregate.input';
import { ConversationMaxOrderByAggregateInput } from './conversation-max-order-by-aggregate.input';
import { ConversationMinOrderByAggregateInput } from './conversation-min-order-by-aggregate.input';
import { ConversationSumOrderByAggregateInput } from './conversation-sum-order-by-aggregate.input';

@InputType()
export class ConversationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    initiatedBy?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    participantIds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    lastMessageId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    valid?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    enabled?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    preferredPaymentMethod?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    preferredAddressId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paymentLinkSent?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    deliveryConfirmedBySeller?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paymentLinkCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    orderId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    payload?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    consumersLastSeen?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    providersLastSeen?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ConversationCountOrderByAggregateInput, {nullable:true})
    _count?: ConversationCountOrderByAggregateInput;

    @Field(() => ConversationAvgOrderByAggregateInput, {nullable:true})
    _avg?: ConversationAvgOrderByAggregateInput;

    @Field(() => ConversationMaxOrderByAggregateInput, {nullable:true})
    _max?: ConversationMaxOrderByAggregateInput;

    @Field(() => ConversationMinOrderByAggregateInput, {nullable:true})
    _min?: ConversationMinOrderByAggregateInput;

    @Field(() => ConversationSumOrderByAggregateInput, {nullable:true})
    _sum?: ConversationSumOrderByAggregateInput;
}
