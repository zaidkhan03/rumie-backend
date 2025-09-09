import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdCountOrderByAggregateInput } from './ad-count-order-by-aggregate.input';
import { AdAvgOrderByAggregateInput } from './ad-avg-order-by-aggregate.input';
import { AdMaxOrderByAggregateInput } from './ad-max-order-by-aggregate.input';
import { AdMinOrderByAggregateInput } from './ad-min-order-by-aggregate.input';
import { AdSumOrderByAggregateInput } from './ad-sum-order-by-aggregate.input';

@InputType()
export class AdOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    visibility?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    url?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    advertiserName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    advertiserId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    monthlyBudget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    priority?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    targetGenders?: `${SortOrder}`;

    @Field(() => AdCountOrderByAggregateInput, {nullable:true})
    _count?: AdCountOrderByAggregateInput;

    @Field(() => AdAvgOrderByAggregateInput, {nullable:true})
    _avg?: AdAvgOrderByAggregateInput;

    @Field(() => AdMaxOrderByAggregateInput, {nullable:true})
    _max?: AdMaxOrderByAggregateInput;

    @Field(() => AdMinOrderByAggregateInput, {nullable:true})
    _min?: AdMinOrderByAggregateInput;

    @Field(() => AdSumOrderByAggregateInput, {nullable:true})
    _sum?: AdSumOrderByAggregateInput;
}
