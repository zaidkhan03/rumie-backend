import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutOrderInput } from './payment-create-without-order.input';
import { Type } from 'class-transformer';
import { PaymentCreateOrConnectWithoutOrderInput } from './payment-create-or-connect-without-order.input';
import { PaymentUpsertWithoutOrderInput } from './payment-upsert-without-order.input';
import { PaymentWhereInput } from './payment-where.input';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { PaymentUpdateToOneWithWhereWithoutOrderInput } from './payment-update-to-one-with-where-without-order.input';

@InputType()
export class PaymentUpdateOneWithoutOrderNestedInput {

    @Field(() => PaymentCreateWithoutOrderInput, {nullable:true})
    @Type(() => PaymentCreateWithoutOrderInput)
    create?: PaymentCreateWithoutOrderInput;

    @Field(() => PaymentCreateOrConnectWithoutOrderInput, {nullable:true})
    @Type(() => PaymentCreateOrConnectWithoutOrderInput)
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput;

    @Field(() => PaymentUpsertWithoutOrderInput, {nullable:true})
    @Type(() => PaymentUpsertWithoutOrderInput)
    upsert?: PaymentUpsertWithoutOrderInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => PaymentWhereInput, {nullable:true})
    @Type(() => PaymentWhereInput)
    delete?: PaymentWhereInput;

    @Field(() => PaymentWhereUniqueInput, {nullable:true})
    @Type(() => PaymentWhereUniqueInput)
    connect?: Prisma.AtLeast<PaymentWhereUniqueInput, 'id'>;

    @Field(() => PaymentUpdateToOneWithWhereWithoutOrderInput, {nullable:true})
    @Type(() => PaymentUpdateToOneWithWhereWithoutOrderInput)
    update?: PaymentUpdateToOneWithWhereWithoutOrderInput;
}
