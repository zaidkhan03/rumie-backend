import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DirectMessageCountOrderByAggregateInput } from './direct-message-count-order-by-aggregate.input';
import { DirectMessageMaxOrderByAggregateInput } from './direct-message-max-order-by-aggregate.input';
import { DirectMessageMinOrderByAggregateInput } from './direct-message-min-order-by-aggregate.input';

@InputType()
export class DirectMessageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    clientId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    senderId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    payload?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    personalDmId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => DirectMessageCountOrderByAggregateInput, {nullable:true})
    _count?: DirectMessageCountOrderByAggregateInput;

    @Field(() => DirectMessageMaxOrderByAggregateInput, {nullable:true})
    _max?: DirectMessageMaxOrderByAggregateInput;

    @Field(() => DirectMessageMinOrderByAggregateInput, {nullable:true})
    _min?: DirectMessageMinOrderByAggregateInput;
}
