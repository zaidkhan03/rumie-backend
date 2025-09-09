import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OrderPayoutRequestLogCountOrderByAggregateInput } from './order-payout-request-log-count-order-by-aggregate.input';
import { OrderPayoutRequestLogMaxOrderByAggregateInput } from './order-payout-request-log-max-order-by-aggregate.input';
import { OrderPayoutRequestLogMinOrderByAggregateInput } from './order-payout-request-log-min-order-by-aggregate.input';

@InputType()
export class OrderPayoutRequestLogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    orderId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    valid?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => OrderPayoutRequestLogCountOrderByAggregateInput, {nullable:true})
    _count?: OrderPayoutRequestLogCountOrderByAggregateInput;

    @Field(() => OrderPayoutRequestLogMaxOrderByAggregateInput, {nullable:true})
    _max?: OrderPayoutRequestLogMaxOrderByAggregateInput;

    @Field(() => OrderPayoutRequestLogMinOrderByAggregateInput, {nullable:true})
    _min?: OrderPayoutRequestLogMinOrderByAggregateInput;
}
