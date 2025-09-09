import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutOrderInput } from './payment-create-without-order.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutOrderInput } from './payment-create-or-connect-without-order.input';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';

@InputType()
export class PaymentCreateNestedOneWithoutOrderInput {

    @Field(() => PaymentCreateWithoutOrderInput, {nullable:true})
    @Type(() => PaymentCreateWithoutOrderInput)
    create?: PaymentCreateWithoutOrderInput;

    @Field(() => PaymentCreateOrConnectWithoutOrderInput, {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutOrderInput)
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput;

    @Field(() => PaymentWhereUniqueInput, {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id'>;
}
