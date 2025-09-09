import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StoryReactionCountOrderByAggregateInput } from './story-reaction-count-order-by-aggregate.input';
import { StoryReactionMaxOrderByAggregateInput } from './story-reaction-max-order-by-aggregate.input';
import { StoryReactionMinOrderByAggregateInput } from './story-reaction-min-order-by-aggregate.input';

@InputType()
export class StoryReactionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    storyId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    previousReactionId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    removedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => StoryReactionCountOrderByAggregateInput, {nullable:true})
    _count?: StoryReactionCountOrderByAggregateInput;

    @Field(() => StoryReactionMaxOrderByAggregateInput, {nullable:true})
    _max?: StoryReactionMaxOrderByAggregateInput;

    @Field(() => StoryReactionMinOrderByAggregateInput, {nullable:true})
    _min?: StoryReactionMinOrderByAggregateInput;
}
