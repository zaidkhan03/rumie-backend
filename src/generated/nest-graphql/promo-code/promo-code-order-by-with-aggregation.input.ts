import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PromoCodeCountOrderByAggregateInput } from './promo-code-count-order-by-aggregate.input';
import { PromoCodeAvgOrderByAggregateInput } from './promo-code-avg-order-by-aggregate.input';
import { PromoCodeMaxOrderByAggregateInput } from './promo-code-max-order-by-aggregate.input';
import { PromoCodeMinOrderByAggregateInput } from './promo-code-min-order-by-aggregate.input';
import { PromoCodeSumOrderByAggregateInput } from './promo-code-sum-order-by-aggregate.input';

@InputType()
export class PromoCodeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    code?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    usageLimit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    useCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PromoCodeCountOrderByAggregateInput, {nullable:true})
    _count?: PromoCodeCountOrderByAggregateInput;

    @Field(() => PromoCodeAvgOrderByAggregateInput, {nullable:true})
    _avg?: PromoCodeAvgOrderByAggregateInput;

    @Field(() => PromoCodeMaxOrderByAggregateInput, {nullable:true})
    _max?: PromoCodeMaxOrderByAggregateInput;

    @Field(() => PromoCodeMinOrderByAggregateInput, {nullable:true})
    _min?: PromoCodeMinOrderByAggregateInput;

    @Field(() => PromoCodeSumOrderByAggregateInput, {nullable:true})
    _sum?: PromoCodeSumOrderByAggregateInput;
}
