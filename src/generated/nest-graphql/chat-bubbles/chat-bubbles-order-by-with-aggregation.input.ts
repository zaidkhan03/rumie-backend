import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChatBubblesCountOrderByAggregateInput } from './chat-bubbles-count-order-by-aggregate.input';
import { ChatBubblesMaxOrderByAggregateInput } from './chat-bubbles-max-order-by-aggregate.input';
import { ChatBubblesMinOrderByAggregateInput } from './chat-bubbles-min-order-by-aggregate.input';

@InputType()
export class ChatBubblesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => ChatBubblesCountOrderByAggregateInput, {nullable:true})
    _count?: ChatBubblesCountOrderByAggregateInput;

    @Field(() => ChatBubblesMaxOrderByAggregateInput, {nullable:true})
    _max?: ChatBubblesMaxOrderByAggregateInput;

    @Field(() => ChatBubblesMinOrderByAggregateInput, {nullable:true})
    _min?: ChatBubblesMinOrderByAggregateInput;
}
