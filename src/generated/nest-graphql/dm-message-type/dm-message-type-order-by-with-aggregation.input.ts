import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DMMessageTypeCountOrderByAggregateInput } from './dm-message-type-count-order-by-aggregate.input';
import { DMMessageTypeMaxOrderByAggregateInput } from './dm-message-type-max-order-by-aggregate.input';
import { DMMessageTypeMinOrderByAggregateInput } from './dm-message-type-min-order-by-aggregate.input';

@InputType()
export class DMMessageTypeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => DMMessageTypeCountOrderByAggregateInput, {nullable:true})
    _count?: DMMessageTypeCountOrderByAggregateInput;

    @Field(() => DMMessageTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: DMMessageTypeMaxOrderByAggregateInput;

    @Field(() => DMMessageTypeMinOrderByAggregateInput, {nullable:true})
    _min?: DMMessageTypeMinOrderByAggregateInput;
}
