import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PrivacyPolicyCountOrderByAggregateInput } from './privacy-policy-count-order-by-aggregate.input';
import { PrivacyPolicyMaxOrderByAggregateInput } from './privacy-policy-max-order-by-aggregate.input';
import { PrivacyPolicyMinOrderByAggregateInput } from './privacy-policy-min-order-by-aggregate.input';

@InputType()
export class PrivacyPolicyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    question?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    answer?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PrivacyPolicyCountOrderByAggregateInput, {nullable:true})
    _count?: PrivacyPolicyCountOrderByAggregateInput;

    @Field(() => PrivacyPolicyMaxOrderByAggregateInput, {nullable:true})
    _max?: PrivacyPolicyMaxOrderByAggregateInput;

    @Field(() => PrivacyPolicyMinOrderByAggregateInput, {nullable:true})
    _min?: PrivacyPolicyMinOrderByAggregateInput;
}
