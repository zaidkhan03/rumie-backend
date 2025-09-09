import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CampusChatCountOrderByAggregateInput } from './campus-chat-count-order-by-aggregate.input';
import { CampusChatMaxOrderByAggregateInput } from './campus-chat-max-order-by-aggregate.input';
import { CampusChatMinOrderByAggregateInput } from './campus-chat-min-order-by-aggregate.input';

@InputType()
export class CampusChatOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    eduInstituteId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => CampusChatCountOrderByAggregateInput, {nullable:true})
    _count?: CampusChatCountOrderByAggregateInput;

    @Field(() => CampusChatMaxOrderByAggregateInput, {nullable:true})
    _max?: CampusChatMaxOrderByAggregateInput;

    @Field(() => CampusChatMinOrderByAggregateInput, {nullable:true})
    _min?: CampusChatMinOrderByAggregateInput;
}
