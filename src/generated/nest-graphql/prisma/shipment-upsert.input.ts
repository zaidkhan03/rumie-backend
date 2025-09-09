import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentCreateInput } from '../shipment/shipment-create.input';
import { Type } from 'class-transformer';
import { ShipmentUpdateInput } from '../shipment/shipment-update.input';

@InputType()
export class ShipmentUpsertInput {

    @Field(() => ShipmentCreateInput, {nullable:false})
    @Type(() => ShipmentCreateInput)
    set!: ShipmentCreateInput;

    @Field(() => ShipmentUpdateInput, {nullable:false})
    @Type(() => ShipmentUpdateInput)
    update!: ShipmentUpdateInput;
}
