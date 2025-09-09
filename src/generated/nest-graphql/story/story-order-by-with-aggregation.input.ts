import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StoryCountOrderByAggregateInput } from './story-count-order-by-aggregate.input';
import { StoryAvgOrderByAggregateInput } from './story-avg-order-by-aggregate.input';
import { StoryMaxOrderByAggregateInput } from './story-max-order-by-aggregate.input';
import { StoryMinOrderByAggregateInput } from './story-min-order-by-aggregate.input';
import { StorySumOrderByAggregateInput } from './story-sum-order-by-aggregate.input';

@InputType()
export class StoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    caption?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    backgroundColor?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    viewCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    eduInstituteId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    archived?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => StoryCountOrderByAggregateInput, {nullable:true})
    _count?: StoryCountOrderByAggregateInput;

    @Field(() => StoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: StoryAvgOrderByAggregateInput;

    @Field(() => StoryMaxOrderByAggregateInput, {nullable:true})
    _max?: StoryMaxOrderByAggregateInput;

    @Field(() => StoryMinOrderByAggregateInput, {nullable:true})
    _min?: StoryMinOrderByAggregateInput;

    @Field(() => StorySumOrderByAggregateInput, {nullable:true})
    _sum?: StorySumOrderByAggregateInput;
}
