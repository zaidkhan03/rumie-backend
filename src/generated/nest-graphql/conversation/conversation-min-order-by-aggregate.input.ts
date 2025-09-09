import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ConversationMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    initiatedBy?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    lastMessageId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    valid?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    enabled?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    preferredPaymentMethod?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    preferredAddressId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paymentLinkSent?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    deliveryConfirmedBySeller?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paymentLinkCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    orderId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    payload?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    consumersLastSeen?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    providersLastSeen?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
