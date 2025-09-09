import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OrderCountOrderByAggregateInput } from './order-count-order-by-aggregate.input';
import { OrderMaxOrderByAggregateInput } from './order-max-order-by-aggregate.input';
import { OrderMinOrderByAggregateInput } from './order-min-order-by-aggregate.input';

@InputType()
export class OrderOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    providerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    consumerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    conversationId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paymentId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    payload?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => OrderCountOrderByAggregateInput, {nullable:true})
    _count?: OrderCountOrderByAggregateInput;

    @Field(() => OrderMaxOrderByAggregateInput, {nullable:true})
    _max?: OrderMaxOrderByAggregateInput;

    @Field(() => OrderMinOrderByAggregateInput, {nullable:true})
    _min?: OrderMinOrderByAggregateInput;
}
