import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Address } from '../address/address.model';
import { Float } from '@nestjs/graphql';
import { ShippingChargePayer } from '../prisma/shipping-charge-payer.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { OrderNotificationType } from '../prisma/order-notification-type.enum';

@ObjectType()
export class Shipment {

    @Field(() => String, {nullable:true})
    labelId!: string | null;

    @Field(() => Address, {nullable:true})
    from?: Address | null;

    @Field(() => Address, {nullable:true})
    to?: Address | null;

    @Field(() => String, {nullable:true})
    labelDownloadlink!: string | null;

    @Field(() => String, {nullable:true})
    trackingNumber!: string | null;

    @Field(() => Float, {nullable:true})
    shippingCharge!: number | null;

    @Field(() => ShippingChargePayer, {nullable:true})
    shippingChargePayer!: `${ShippingChargePayer}` | null;

    @Field(() => GraphQLJSON, {nullable:true})
    events!: any | null;

    @Field(() => String, {nullable:true})
    status_description!: string | null;

    @Field(() => OrderNotificationType, {nullable:true})
    status!: `${OrderNotificationType}` | null;
}
