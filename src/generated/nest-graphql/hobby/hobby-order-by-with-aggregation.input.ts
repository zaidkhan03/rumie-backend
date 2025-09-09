import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HobbyCountOrderByAggregateInput } from './hobby-count-order-by-aggregate.input';
import { HobbyMaxOrderByAggregateInput } from './hobby-max-order-by-aggregate.input';
import { HobbyMinOrderByAggregateInput } from './hobby-min-order-by-aggregate.input';

@InputType()
export class HobbyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userIds?: `${SortOrder}`;

    @Field(() => HobbyCountOrderByAggregateInput, {nullable:true})
    _count?: HobbyCountOrderByAggregateInput;

    @Field(() => HobbyMaxOrderByAggregateInput, {nullable:true})
    _max?: HobbyMaxOrderByAggregateInput;

    @Field(() => HobbyMinOrderByAggregateInput, {nullable:true})
    _min?: HobbyMinOrderByAggregateInput;
}
