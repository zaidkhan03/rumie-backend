import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingChargePayer } from './shipping-charge-payer.enum';

@InputType()
export class NullableEnumShippingChargePayerFieldUpdateOperationsInput {

    @Field(() => ShippingChargePayer, {nullable:true})
    set?: `${ShippingChargePayer}`;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
