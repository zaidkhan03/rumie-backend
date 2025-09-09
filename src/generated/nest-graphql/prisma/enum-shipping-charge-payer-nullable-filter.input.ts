import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingChargePayer } from './shipping-charge-payer.enum';
import { NestedEnumShippingChargePayerNullableFilter } from './nested-enum-shipping-charge-payer-nullable-filter.input';

@InputType()
export class EnumShippingChargePayerNullableFilter {

    @Field(() => ShippingChargePayer, {nullable:true})
    equals?: `${ShippingChargePayer}`;

    @Field(() => [ShippingChargePayer], {nullable:true})
    in?: Array<`${ShippingChargePayer}`>;

    @Field(() => [ShippingChargePayer], {nullable:true})
    notIn?: Array<`${ShippingChargePayer}`>;

    @Field(() => NestedEnumShippingChargePayerNullableFilter, {nullable:true})
    not?: NestedEnumShippingChargePayerNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
