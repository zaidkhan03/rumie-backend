import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingSnapshotCreateEnvelopeInput } from '../product-listing-snapshot/product-listing-snapshot-create-envelope.input';
import { OrderType } from '../prisma/order-type.enum';
import { OrderStatus } from '../prisma/order-status.enum';
import { RentOrderNullableCreateEnvelopeInput } from '../prisma/rent-order-nullable-create-envelope.input';
import { ShipmentNullableCreateEnvelopeInput } from '../prisma/shipment-nullable-create-envelope.input';
import { GraphQLJSON } from 'graphql-type-json';
import { OrderPayoutCreateEnvelopeInput } from '../order-payout/order-payout-create-envelope.input';

@InputType()
export class OrderCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => ProductListingSnapshotCreateEnvelopeInput, {nullable:false})
    productSnapshot!: ProductListingSnapshotCreateEnvelopeInput;

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

    @Field(() => RentOrderNullableCreateEnvelopeInput, {nullable:true})
    rentingDetails?: RentOrderNullableCreateEnvelopeInput;

    @Field(() => ShipmentNullableCreateEnvelopeInput, {nullable:true})
    shipment?: ShipmentNullableCreateEnvelopeInput;

    @Field(() => GraphQLJSON, {nullable:false})
    payload!: any;

    @Field(() => OrderPayoutCreateEnvelopeInput, {nullable:false})
    payout!: OrderPayoutCreateEnvelopeInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
