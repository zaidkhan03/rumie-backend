import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressObjectEqualityInput } from './address-object-equality.input';
import { Float } from '@nestjs/graphql';
import { ShippingChargePayer } from './shipping-charge-payer.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { OrderNotificationType } from './order-notification-type.enum';

@InputType()
export class ShipmentObjectEqualityInput {

    @Field(() => String, {nullable:true})
    labelId?: string;

    @Field(() => AddressObjectEqualityInput, {nullable:true})
    from?: AddressObjectEqualityInput;

    @Field(() => AddressObjectEqualityInput, {nullable:true})
    to?: AddressObjectEqualityInput;

    @Field(() => String, {nullable:true})
    labelDownloadlink?: string;

    @Field(() => String, {nullable:true})
    trackingNumber?: string;

    @Field(() => Float, {nullable:true})
    shippingCharge?: number;

    @Field(() => ShippingChargePayer, {nullable:true})
    shippingChargePayer?: `${ShippingChargePayer}`;

    @Field(() => GraphQLJSON, {nullable:true})
    events?: any;

    @Field(() => String, {nullable:true})
    status_description?: string;

    @Field(() => OrderNotificationType, {nullable:true})
    status?: `${OrderNotificationType}`;
}
