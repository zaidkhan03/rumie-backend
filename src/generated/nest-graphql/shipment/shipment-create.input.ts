import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateInput } from '../address/address-create.input';
import { Float } from '@nestjs/graphql';
import { ShippingChargePayer } from '../prisma/shipping-charge-payer.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { OrderNotificationType } from '../prisma/order-notification-type.enum';

@InputType()
export class ShipmentCreateInput {

    @Field(() => String, {nullable:true})
    labelId?: string;

    @Field(() => AddressCreateInput, {nullable:true})
    from?: AddressCreateInput;

    @Field(() => AddressCreateInput, {nullable:true})
    to?: AddressCreateInput;

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
