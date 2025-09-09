import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ProductListingSnapshotCompositeFilter } from '../prisma/product-listing-snapshot-composite-filter.input';
import { EnumOrderTypeFilter } from '../prisma/enum-order-type-filter.input';
import { EnumOrderStatusFilter } from '../prisma/enum-order-status-filter.input';
import { RentOrderNullableCompositeFilter } from '../prisma/rent-order-nullable-composite-filter.input';
import { ShipmentNullableCompositeFilter } from '../prisma/shipment-nullable-composite-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { OrderPayoutCompositeFilter } from '../prisma/order-payout-composite-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PaymentNullableRelationFilter } from '../payment/payment-nullable-relation-filter.input';
import { SupportTicketListRelationFilter } from '../support-ticket/support-ticket-list-relation-filter.input';

@InputType()
export class OrderWhereInput {

    @Field(() => [OrderWhereInput], {nullable:true})
    AND?: Array<OrderWhereInput>;

    @Field(() => [OrderWhereInput], {nullable:true})
    OR?: Array<OrderWhereInput>;

    @Field(() => [OrderWhereInput], {nullable:true})
    NOT?: Array<OrderWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => ProductListingSnapshotCompositeFilter, {nullable:true})
    productSnapshot?: ProductListingSnapshotCompositeFilter;

    @Field(() => EnumOrderTypeFilter, {nullable:true})
    type?: EnumOrderTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    providerId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    consumerId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    conversationId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    paymentId?: StringFilter;

    @Field(() => EnumOrderStatusFilter, {nullable:true})
    status?: EnumOrderStatusFilter;

    @Field(() => RentOrderNullableCompositeFilter, {nullable:true})
    rentingDetails?: RentOrderNullableCompositeFilter;

    @Field(() => ShipmentNullableCompositeFilter, {nullable:true})
    shipment?: ShipmentNullableCompositeFilter;

    @Field(() => JsonFilter, {nullable:true})
    payload?: JsonFilter;

    @Field(() => OrderPayoutCompositeFilter, {nullable:true})
    payout?: OrderPayoutCompositeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PaymentNullableRelationFilter, {nullable:true})
    payment?: PaymentNullableRelationFilter;

    @Field(() => SupportTicketListRelationFilter, {nullable:true})
    supportTickets?: SupportTicketListRelationFilter;
}
