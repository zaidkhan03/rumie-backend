import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NotificationPayloadsCountOrderByAggregateInput } from './notification-payloads-count-order-by-aggregate.input';
import { NotificationPayloadsMaxOrderByAggregateInput } from './notification-payloads-max-order-by-aggregate.input';
import { NotificationPayloadsMinOrderByAggregateInput } from './notification-payloads-min-order-by-aggregate.input';

@InputType()
export class NotificationPayloadsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => NotificationPayloadsCountOrderByAggregateInput, {nullable:true})
    _count?: NotificationPayloadsCountOrderByAggregateInput;

    @Field(() => NotificationPayloadsMaxOrderByAggregateInput, {nullable:true})
    _max?: NotificationPayloadsMaxOrderByAggregateInput;

    @Field(() => NotificationPayloadsMinOrderByAggregateInput, {nullable:true})
    _min?: NotificationPayloadsMinOrderByAggregateInput;
}
