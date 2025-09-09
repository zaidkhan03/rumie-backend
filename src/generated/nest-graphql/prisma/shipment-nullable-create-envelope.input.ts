import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentCreateInput } from '../shipment/shipment-create.input';
import { Type } from 'class-transformer';

@InputType()
export class ShipmentNullableCreateEnvelopeInput {

    @Field(() => ShipmentCreateInput, {nullable:true})
    @Type(() => ShipmentCreateInput)
    set?: ShipmentCreateInput;
}
