import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AppLovinCountOrderByAggregateInput } from './app-lovin-count-order-by-aggregate.input';
import { AppLovinMaxOrderByAggregateInput } from './app-lovin-max-order-by-aggregate.input';
import { AppLovinMinOrderByAggregateInput } from './app-lovin-min-order-by-aggregate.input';

@InputType()
export class AppLovinOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    alias?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    adUnitId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    position?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => AppLovinCountOrderByAggregateInput, {nullable:true})
    _count?: AppLovinCountOrderByAggregateInput;

    @Field(() => AppLovinMaxOrderByAggregateInput, {nullable:true})
    _max?: AppLovinMaxOrderByAggregateInput;

    @Field(() => AppLovinMinOrderByAggregateInput, {nullable:true})
    _min?: AppLovinMinOrderByAggregateInput;
}
