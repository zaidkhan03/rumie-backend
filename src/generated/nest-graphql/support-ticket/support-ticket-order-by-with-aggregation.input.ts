import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SupportTicketCountOrderByAggregateInput } from './support-ticket-count-order-by-aggregate.input';
import { SupportTicketMaxOrderByAggregateInput } from './support-ticket-max-order-by-aggregate.input';
import { SupportTicketMinOrderByAggregateInput } from './support-ticket-min-order-by-aggregate.input';

@InputType()
export class SupportTicketOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    issue?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    initiator?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    associatedUserId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    resolved?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    concernedId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userLastSeen?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    adminLastSeen?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SupportTicketCountOrderByAggregateInput, {nullable:true})
    _count?: SupportTicketCountOrderByAggregateInput;

    @Field(() => SupportTicketMaxOrderByAggregateInput, {nullable:true})
    _max?: SupportTicketMaxOrderByAggregateInput;

    @Field(() => SupportTicketMinOrderByAggregateInput, {nullable:true})
    _min?: SupportTicketMinOrderByAggregateInput;
}
