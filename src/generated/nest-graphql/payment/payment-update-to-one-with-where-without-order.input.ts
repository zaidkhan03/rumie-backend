import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';
import { Type } from 'class-transformer';
import { PaymentUpdateWithoutOrderInput } from './payment-update-without-order.input';

@InputType()
export class PaymentUpdateToOneWithWhereWithoutOrderInput {

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    where?: PaymentWhereInput;

    @Field(() => PaymentUpdateWithoutOrderInput, {nullable:false})
    @Type(() => PaymentUpdateWithoutOrderInput)
    data!: PaymentUpdateWithoutOrderInput;
}
