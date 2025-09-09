import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EduInstituteCountOrderByAggregateInput } from './edu-institute-count-order-by-aggregate.input';
import { EduInstituteMaxOrderByAggregateInput } from './edu-institute-max-order-by-aggregate.input';
import { EduInstituteMinOrderByAggregateInput } from './edu-institute-min-order-by-aggregate.input';

@InputType()
export class EduInstituteOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    domain?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    logo?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    city?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    state?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    address?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    zip?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    location?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    passCode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isRegistered?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => EduInstituteCountOrderByAggregateInput, {nullable:true})
    _count?: EduInstituteCountOrderByAggregateInput;

    @Field(() => EduInstituteMaxOrderByAggregateInput, {nullable:true})
    _max?: EduInstituteMaxOrderByAggregateInput;

    @Field(() => EduInstituteMinOrderByAggregateInput, {nullable:true})
    _min?: EduInstituteMinOrderByAggregateInput;
}
