import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentObjectEqualityInput } from './shipment-object-equality.input';
import { ShipmentWhereInput } from '../shipment/shipment-where.input';

@InputType()
export class ShipmentNullableCompositeFilter {

    @Field(() => ShipmentObjectEqualityInput, {nullable:true})
    equals?: ShipmentObjectEqualityInput;

    @Field(() => ShipmentWhereInput, {nullable:true})
    is?: ShipmentWhereInput;

    @Field(() => ShipmentWhereInput, {nullable:true})
    isNot?: ShipmentWhereInput;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
