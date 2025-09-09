import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BannedWordsCategoryCountOrderByAggregateInput } from './banned-words-category-count-order-by-aggregate.input';
import { BannedWordsCategoryAvgOrderByAggregateInput } from './banned-words-category-avg-order-by-aggregate.input';
import { BannedWordsCategoryMaxOrderByAggregateInput } from './banned-words-category-max-order-by-aggregate.input';
import { BannedWordsCategoryMinOrderByAggregateInput } from './banned-words-category-min-order-by-aggregate.input';
import { BannedWordsCategorySumOrderByAggregateInput } from './banned-words-category-sum-order-by-aggregate.input';

@InputType()
export class BannedWordsCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    severity?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => BannedWordsCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: BannedWordsCategoryCountOrderByAggregateInput;

    @Field(() => BannedWordsCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: BannedWordsCategoryAvgOrderByAggregateInput;

    @Field(() => BannedWordsCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: BannedWordsCategoryMaxOrderByAggregateInput;

    @Field(() => BannedWordsCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: BannedWordsCategoryMinOrderByAggregateInput;

    @Field(() => BannedWordsCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: BannedWordsCategorySumOrderByAggregateInput;
}
