import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShoppingPreferenceCountOrderByAggregateInput } from './shopping-preference-count-order-by-aggregate.input';
import { ShoppingPreferenceMaxOrderByAggregateInput } from './shopping-preference-max-order-by-aggregate.input';
import { ShoppingPreferenceMinOrderByAggregateInput } from './shopping-preference-min-order-by-aggregate.input';

@InputType()
export class ShoppingPreferenceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userIds?: `${SortOrder}`;

    @Field(() => ShoppingPreferenceCountOrderByAggregateInput, {nullable:true})
    _count?: ShoppingPreferenceCountOrderByAggregateInput;

    @Field(() => ShoppingPreferenceMaxOrderByAggregateInput, {nullable:true})
    _max?: ShoppingPreferenceMaxOrderByAggregateInput;

    @Field(() => ShoppingPreferenceMinOrderByAggregateInput, {nullable:true})
    _min?: ShoppingPreferenceMinOrderByAggregateInput;
}
