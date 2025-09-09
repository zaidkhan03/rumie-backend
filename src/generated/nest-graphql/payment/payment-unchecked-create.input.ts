import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gateway } from '../prisma/gateway.enum';
import { Float } from '@nestjs/graphql';
import { OrderUncheckedCreateNestedOneWithoutPaymentInput } from '../order/order-unchecked-create-nested-one-without-payment.input';

@InputType()
export class PaymentUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Gateway, {nullable:false})
    gateway!: `${Gateway}`;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    methodDescription!: string;

    @Field(() => String, {nullable:false})
    stripePaymentId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderUncheckedCreateNestedOneWithoutPaymentInput, {nullable:true})
    order?: OrderUncheckedCreateNestedOneWithoutPaymentInput;
}
