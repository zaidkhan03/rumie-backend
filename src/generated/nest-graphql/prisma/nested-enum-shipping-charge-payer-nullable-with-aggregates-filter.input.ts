import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingChargePayer } from './shipping-charge-payer.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumShippingChargePayerNullableFilter } from './nested-enum-shipping-charge-payer-nullable-filter.input';

@InputType()
export class NestedEnumShippingChargePayerNullableWithAggregatesFilter {

    @Field(() => ShippingChargePayer, {nullable:true})
    equals?: `${ShippingChargePayer}`;

    @Field(() => [ShippingChargePayer], {nullable:true})
    in?: Array<`${ShippingChargePayer}`>;

    @Field(() => [ShippingChargePayer], {nullable:true})
    notIn?: Array<`${ShippingChargePayer}`>;

    @Field(() => NestedEnumShippingChargePayerNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumShippingChargePayerNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumShippingChargePayerNullableFilter, {nullable:true})
    _min?: NestedEnumShippingChargePayerNullableFilter;

    @Field(() => NestedEnumShippingChargePayerNullableFilter, {nullable:true})
    _max?: NestedEnumShippingChargePayerNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
