import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StoryViewCountOrderByAggregateInput } from './story-view-count-order-by-aggregate.input';
import { StoryViewMaxOrderByAggregateInput } from './story-view-max-order-by-aggregate.input';
import { StoryViewMinOrderByAggregateInput } from './story-view-min-order-by-aggregate.input';

@InputType()
export class StoryViewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    storyId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => StoryViewCountOrderByAggregateInput, {nullable:true})
    _count?: StoryViewCountOrderByAggregateInput;

    @Field(() => StoryViewMaxOrderByAggregateInput, {nullable:true})
    _max?: StoryViewMaxOrderByAggregateInput;

    @Field(() => StoryViewMinOrderByAggregateInput, {nullable:true})
    _min?: StoryViewMinOrderByAggregateInput;
}
