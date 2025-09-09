import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SupportTicketMaxOrderByAggregateInput {

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
}
