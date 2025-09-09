import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentOrderCreateInput } from '../rent-order/rent-order-create.input';
import { Type } from 'class-transformer';

@InputType()
export class RentOrderNullableCreateEnvelopeInput {

    @Field(() => RentOrderCreateInput, {nullable:true})
    @Type(() => RentOrderCreateInput)
    set?: RentOrderCreateInput;
}
