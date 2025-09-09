import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentCreateInput } from '../shipment/shipment-create.input';
import { Type } from 'class-transformer';
import { ShipmentUpsertInput } from './shipment-upsert.input';

@InputType()
export class ShipmentNullableUpdateEnvelopeInput {

    @Field(() => ShipmentCreateInput, {nullable:true})
    @Type(() => ShipmentCreateInput)
    set?: ShipmentCreateInput;

    @Field(() => ShipmentUpsertInput, {nullable:true})
    @Type(() => ShipmentUpsertInput)
    upsert?: ShipmentUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
