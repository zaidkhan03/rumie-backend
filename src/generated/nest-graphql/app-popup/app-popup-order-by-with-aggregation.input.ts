import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AppPopupCountOrderByAggregateInput } from './app-popup-count-order-by-aggregate.input';
import { AppPopupAvgOrderByAggregateInput } from './app-popup-avg-order-by-aggregate.input';
import { AppPopupMaxOrderByAggregateInput } from './app-popup-max-order-by-aggregate.input';
import { AppPopupMinOrderByAggregateInput } from './app-popup-min-order-by-aggregate.input';
import { AppPopupSumOrderByAggregateInput } from './app-popup-sum-order-by-aggregate.input';

@InputType()
export class AppPopupOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    frequency?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    selectionListType?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    template?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ctaUrl?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ctaText?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    couponCode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    delayInSeconds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => AppPopupCountOrderByAggregateInput, {nullable:true})
    _count?: AppPopupCountOrderByAggregateInput;

    @Field(() => AppPopupAvgOrderByAggregateInput, {nullable:true})
    _avg?: AppPopupAvgOrderByAggregateInput;

    @Field(() => AppPopupMaxOrderByAggregateInput, {nullable:true})
    _max?: AppPopupMaxOrderByAggregateInput;

    @Field(() => AppPopupMinOrderByAggregateInput, {nullable:true})
    _min?: AppPopupMinOrderByAggregateInput;

    @Field(() => AppPopupSumOrderByAggregateInput, {nullable:true})
    _sum?: AppPopupSumOrderByAggregateInput;
}
