import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProductListingSnapshot } from '../product-listing-snapshot/product-listing-snapshot.model';
import { OrderType } from '../prisma/order-type.enum';
import { OrderStatus } from '../prisma/order-status.enum';
import { RentOrder } from '../rent-order/rent-order.model';
import { Shipment } from '../shipment/shipment.model';
import { GraphQLJSON } from 'graphql-type-json';
import { OrderPayout } from '../order-payout/order-payout.model';
import { Payment } from '../payment/payment.model';
import { SupportTicket } from '../support-ticket/support-ticket.model';
import { OrderCount } from './order-count.output';

@ObjectType()
export class Order {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => ProductListingSnapshot, {nullable:false})
    productSnapshot?: ProductListingSnapshot;

    @Field(() => OrderType, {nullable:false})
    type!: `${OrderType}`;

    @Field(() => String, {nullable:false})
    providerId!: string;

    @Field(() => String, {nullable:false})
    consumerId!: string;

    @Field(() => String, {nullable:false})
    conversationId!: string;

    @Field(() => String, {nullable:false})
    paymentId!: string;

    @Field(() => OrderStatus, {nullable:false})
    status!: `${OrderStatus}`;

    @Field(() => RentOrder, {nullable:true})
    rentingDetails?: RentOrder | null;

    @Field(() => Shipment, {nullable:true})
    shipment?: Shipment | null;

    @Field(() => GraphQLJSON, {nullable:false})
    payload!: any;

    @Field(() => OrderPayout, {nullable:false})
    payout?: OrderPayout;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Payment, {nullable:true})
    payment?: Payment | null;

    @Field(() => [SupportTicket], {nullable:true})
    supportTickets?: Array<SupportTicket>;

    @Field(() => OrderCount, {nullable:false})
    _count?: OrderCount;
}
