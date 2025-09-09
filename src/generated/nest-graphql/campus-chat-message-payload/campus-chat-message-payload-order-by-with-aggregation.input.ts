import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CampusChatMessagePayloadCountOrderByAggregateInput } from './campus-chat-message-payload-count-order-by-aggregate.input';
import { CampusChatMessagePayloadMaxOrderByAggregateInput } from './campus-chat-message-payload-max-order-by-aggregate.input';
import { CampusChatMessagePayloadMinOrderByAggregateInput } from './campus-chat-message-payload-min-order-by-aggregate.input';

@InputType()
export class CampusChatMessagePayloadOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => CampusChatMessagePayloadCountOrderByAggregateInput, {nullable:true})
    _count?: CampusChatMessagePayloadCountOrderByAggregateInput;

    @Field(() => CampusChatMessagePayloadMaxOrderByAggregateInput, {nullable:true})
    _max?: CampusChatMessagePayloadMaxOrderByAggregateInput;

    @Field(() => CampusChatMessagePayloadMinOrderByAggregateInput, {nullable:true})
    _min?: CampusChatMessagePayloadMinOrderByAggregateInput;
}
