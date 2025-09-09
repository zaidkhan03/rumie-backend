import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PayoutRequestLogCountOrderByAggregateInput } from './payout-request-log-count-order-by-aggregate.input';
import { PayoutRequestLogMaxOrderByAggregateInput } from './payout-request-log-max-order-by-aggregate.input';
import { PayoutRequestLogMinOrderByAggregateInput } from './payout-request-log-min-order-by-aggregate.input';

@InputType()
export class PayoutRequestLogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    valid?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PayoutRequestLogCountOrderByAggregateInput, {nullable:true})
    _count?: PayoutRequestLogCountOrderByAggregateInput;

    @Field(() => PayoutRequestLogMaxOrderByAggregateInput, {nullable:true})
    _max?: PayoutRequestLogMaxOrderByAggregateInput;

    @Field(() => PayoutRequestLogMinOrderByAggregateInput, {nullable:true})
    _min?: PayoutRequestLogMinOrderByAggregateInput;
}
