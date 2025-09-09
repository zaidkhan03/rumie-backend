import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WeightCategoryCountOrderByAggregateInput } from './weight-category-count-order-by-aggregate.input';
import { WeightCategoryAvgOrderByAggregateInput } from './weight-category-avg-order-by-aggregate.input';
import { WeightCategoryMaxOrderByAggregateInput } from './weight-category-max-order-by-aggregate.input';
import { WeightCategoryMinOrderByAggregateInput } from './weight-category-min-order-by-aggregate.input';
import { WeightCategorySumOrderByAggregateInput } from './weight-category-sum-order-by-aggregate.input';

@InputType()
export class WeightCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    alias?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingFee?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => WeightCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: WeightCategoryCountOrderByAggregateInput;

    @Field(() => WeightCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: WeightCategoryAvgOrderByAggregateInput;

    @Field(() => WeightCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: WeightCategoryMaxOrderByAggregateInput;

    @Field(() => WeightCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: WeightCategoryMinOrderByAggregateInput;

    @Field(() => WeightCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: WeightCategorySumOrderByAggregateInput;
}
