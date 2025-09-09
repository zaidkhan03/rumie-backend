import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentOrderCreateInput } from '../rent-order/rent-order-create.input';
import { Type } from 'class-transformer';
import { RentOrderUpsertInput } from './rent-order-upsert.input';

@InputType()
export class RentOrderNullableUpdateEnvelopeInput {

    @Field(() => RentOrderCreateInput, {nullable:true})
    @Type(() => RentOrderCreateInput)
    set?: RentOrderCreateInput;

    @Field(() => RentOrderUpsertInput, {nullable:true})
    @Type(() => RentOrderUpsertInput)
    upsert?: RentOrderUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
