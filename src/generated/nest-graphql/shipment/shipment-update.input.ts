import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AddressNullableUpdateEnvelopeInput } from '../prisma/address-nullable-update-envelope.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableEnumShippingChargePayerFieldUpdateOperationsInput } from '../prisma/nullable-enum-shipping-charge-payer-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableEnumOrderNotificationTypeFieldUpdateOperationsInput } from '../prisma/nullable-enum-order-notification-type-field-update-operations.input';

@InputType()
export class ShipmentUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    labelId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AddressNullableUpdateEnvelopeInput, {nullable:true})
    from?: AddressNullableUpdateEnvelopeInput;

    @Field(() => AddressNullableUpdateEnvelopeInput, {nullable:true})
    to?: AddressNullableUpdateEnvelopeInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    labelDownloadlink?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    trackingNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    shippingCharge?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableEnumShippingChargePayerFieldUpdateOperationsInput, {nullable:true})
    shippingChargePayer?: NullableEnumShippingChargePayerFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    events?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    status_description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumOrderNotificationTypeFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumOrderNotificationTypeFieldUpdateOperationsInput;
}
