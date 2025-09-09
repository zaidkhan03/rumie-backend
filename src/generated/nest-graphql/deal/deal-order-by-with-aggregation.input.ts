import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DealCountOrderByAggregateInput } from './deal-count-order-by-aggregate.input';
import { DealMaxOrderByAggregateInput } from './deal-max-order-by-aggregate.input';
import { DealMinOrderByAggregateInput } from './deal-min-order-by-aggregate.input';

@InputType()
export class DealOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    couponCode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    savedUserIds?: `${SortOrder}`;

    @Field(() => DealCountOrderByAggregateInput, {nullable:true})
    _count?: DealCountOrderByAggregateInput;

    @Field(() => DealMaxOrderByAggregateInput, {nullable:true})
    _max?: DealMaxOrderByAggregateInput;

    @Field(() => DealMinOrderByAggregateInput, {nullable:true})
    _min?: DealMinOrderByAggregateInput;
}
