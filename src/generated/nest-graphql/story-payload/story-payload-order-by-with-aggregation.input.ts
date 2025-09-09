import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StoryPayloadCountOrderByAggregateInput } from './story-payload-count-order-by-aggregate.input';
import { StoryPayloadMaxOrderByAggregateInput } from './story-payload-max-order-by-aggregate.input';
import { StoryPayloadMinOrderByAggregateInput } from './story-payload-min-order-by-aggregate.input';

@InputType()
export class StoryPayloadOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => StoryPayloadCountOrderByAggregateInput, {nullable:true})
    _count?: StoryPayloadCountOrderByAggregateInput;

    @Field(() => StoryPayloadMaxOrderByAggregateInput, {nullable:true})
    _max?: StoryPayloadMaxOrderByAggregateInput;

    @Field(() => StoryPayloadMinOrderByAggregateInput, {nullable:true})
    _min?: StoryPayloadMinOrderByAggregateInput;
}
