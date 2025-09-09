import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductListingSnapshotUpdateEnvelopeInput } from '../product-listing-snapshot/product-listing-snapshot-update-envelope.input';
import { EnumOrderTypeFieldUpdateOperationsInput } from '../prisma/enum-order-type-field-update-operations.input';
import { EnumOrderStatusFieldUpdateOperationsInput } from '../prisma/enum-order-status-field-update-operations.input';
import { RentOrderNullableUpdateEnvelopeInput } from '../prisma/rent-order-nullable-update-envelope.input';
import { ShipmentNullableUpdateEnvelopeInput } from '../prisma/shipment-nullable-update-envelope.input';
import { GraphQLJSON } from 'graphql-type-json';
import { OrderPayoutUpdateEnvelopeInput } from '../order-payout/order-payout-update-envelope.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SupportTicketUncheckedUpdateManyWithoutConcernedOrderNestedInput } from '../support-ticket/support-ticket-unchecked-update-many-without-concerned-order-nested.input';

@InputType()
export class OrderUncheckedUpdateWithoutPaymentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: StringFieldUpdateOperationsInput;

    @Field(() => ProductListingSnapshotUpdateEnvelopeInput, {nullable:true})
    productSnapshot?: ProductListingSnapshotUpdateEnvelopeInput;

    @Field(() => EnumOrderTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumOrderTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    providerId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    consumerId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    conversationId?: StringFieldUpdateOperationsInput;

    @Field(() => EnumOrderStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumOrderStatusFieldUpdateOperationsInput;

    @Field(() => RentOrderNullableUpdateEnvelopeInput, {nullable:true})
    rentingDetails?: RentOrderNullableUpdateEnvelopeInput;

    @Field(() => ShipmentNullableUpdateEnvelopeInput, {nullable:true})
    shipment?: ShipmentNullableUpdateEnvelopeInput;

    @Field(() => GraphQLJSON, {nullable:true})
    payload?: any;

    @Field(() => OrderPayoutUpdateEnvelopeInput, {nullable:true})
    payout?: OrderPayoutUpdateEnvelopeInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => SupportTicketUncheckedUpdateManyWithoutConcernedOrderNestedInput, {nullable:true})
    supportTickets?: SupportTicketUncheckedUpdateManyWithoutConcernedOrderNestedInput;
}
