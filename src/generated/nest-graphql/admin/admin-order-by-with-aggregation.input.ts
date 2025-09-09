import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminCountOrderByAggregateInput } from './admin-count-order-by-aggregate.input';
import { AdminMaxOrderByAggregateInput } from './admin-max-order-by-aggregate.input';
import { AdminMinOrderByAggregateInput } from './admin-min-order-by-aggregate.input';

@InputType()
export class AdminOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    username?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    countryCode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    roles?: `${SortOrder}`;

    @Field(() => AdminCountOrderByAggregateInput, {nullable:true})
    _count?: AdminCountOrderByAggregateInput;

    @Field(() => AdminMaxOrderByAggregateInput, {nullable:true})
    _max?: AdminMaxOrderByAggregateInput;

    @Field(() => AdminMinOrderByAggregateInput, {nullable:true})
    _min?: AdminMinOrderByAggregateInput;
}
