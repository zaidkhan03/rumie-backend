import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentUpdateWithoutOrderInput } from './payment-update-without-order.input';
import { Type } from 'class-transformer';
import { PaymentCreateWithoutOrderInput } from './payment-create-without-order.input';
import { PaymentWhereInput } from './payment-where.input';

@InputType()
export class PaymentUpsertWithoutOrderInput {

    @Field(() => PaymentUpdateWithoutOrderInput, {nullable:false})
    @Type(() => PaymentUpdateWithoutOrderInput)
    update!: PaymentUpdateWithoutOrderInput;

    @Field(() => PaymentCreateWithoutOrderInput, {nullable:false})
    @Type(() => PaymentCreateWithoutOrderInput)
    create!: PaymentCreateWithoutOrderInput;

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    where?: PaymentWhereInput;
}
