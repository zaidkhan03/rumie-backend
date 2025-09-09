import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductListingSnapshotOrderByInput } from '../product-listing-snapshot/product-listing-snapshot-order-by.input';
import { RentOrderOrderByInput } from '../rent-order/rent-order-order-by.input';
import { ShipmentOrderByInput } from '../shipment/shipment-order-by.input';
import { OrderPayoutOrderByInput } from '../order-payout/order-payout-order-by.input';
import { PaymentOrderByWithRelationInput } from '../payment/payment-order-by-with-relation.input';
import { SupportTicketOrderByRelationAggregateInput } from '../support-ticket/support-ticket-order-by-relation-aggregate.input';

@InputType()
export class OrderOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => ProductListingSnapshotOrderByInput, {nullable:true})
    productSnapshot?: ProductListingSnapshotOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    providerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    consumerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    conversationId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paymentId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => RentOrderOrderByInput, {nullable:true})
    rentingDetails?: RentOrderOrderByInput;

    @Field(() => ShipmentOrderByInput, {nullable:true})
    shipment?: ShipmentOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    payload?: `${SortOrder}`;

    @Field(() => OrderPayoutOrderByInput, {nullable:true})
    payout?: OrderPayoutOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => PaymentOrderByWithRelationInput, {nullable:true})
    payment?: PaymentOrderByWithRelationInput;

    @Field(() => SupportTicketOrderByRelationAggregateInput, {nullable:true})
    supportTickets?: SupportTicketOrderByRelationAggregateInput;
}
