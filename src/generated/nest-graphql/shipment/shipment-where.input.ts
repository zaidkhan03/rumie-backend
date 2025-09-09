import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { AddressNullableCompositeFilter } from '../prisma/address-nullable-composite-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { EnumShippingChargePayerNullableFilter } from '../prisma/enum-shipping-charge-payer-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { EnumOrderNotificationTypeNullableFilter } from '../prisma/enum-order-notification-type-nullable-filter.input';

@InputType()
export class ShipmentWhereInput {

    @Field(() => [ShipmentWhereInput], {nullable:true})
    AND?: Array<ShipmentWhereInput>;

    @Field(() => [ShipmentWhereInput], {nullable:true})
    OR?: Array<ShipmentWhereInput>;

    @Field(() => [ShipmentWhereInput], {nullable:true})
    NOT?: Array<ShipmentWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    labelId?: StringNullableFilter;

    @Field(() => AddressNullableCompositeFilter, {nullable:true})
    from?: AddressNullableCompositeFilter;

    @Field(() => AddressNullableCompositeFilter, {nullable:true})
    to?: AddressNullableCompositeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    labelDownloadlink?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    trackingNumber?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    shippingCharge?: FloatNullableFilter;

    @Field(() => EnumShippingChargePayerNullableFilter, {nullable:true})
    shippingChargePayer?: EnumShippingChargePayerNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    events?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    status_description?: StringNullableFilter;

    @Field(() => EnumOrderNotificationTypeNullableFilter, {nullable:true})
    status?: EnumOrderNotificationTypeNullableFilter;
}
