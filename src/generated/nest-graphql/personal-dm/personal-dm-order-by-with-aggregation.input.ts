import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PersonalDMCountOrderByAggregateInput } from './personal-dm-count-order-by-aggregate.input';
import { PersonalDMMaxOrderByAggregateInput } from './personal-dm-max-order-by-aggregate.input';
import { PersonalDMMinOrderByAggregateInput } from './personal-dm-min-order-by-aggregate.input';

@InputType()
export class PersonalDMOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    initiatedBy?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    participantIds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    lastMessageId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    valid?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    enabled?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    payload?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    consumersLastSeen?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    providersLastSeen?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PersonalDMCountOrderByAggregateInput, {nullable:true})
    _count?: PersonalDMCountOrderByAggregateInput;

    @Field(() => PersonalDMMaxOrderByAggregateInput, {nullable:true})
    _max?: PersonalDMMaxOrderByAggregateInput;

    @Field(() => PersonalDMMinOrderByAggregateInput, {nullable:true})
    _min?: PersonalDMMinOrderByAggregateInput;
}
