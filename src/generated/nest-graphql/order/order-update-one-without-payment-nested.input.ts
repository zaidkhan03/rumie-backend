import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutPaymentInput } from './order-create-without-payment.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutPaymentInput } from './order-create-or-connect-without-payment.input';
import { OrderUpsertWithoutPaymentInput } from './order-upsert-without-payment.input';
import { OrderWhereInput } from './order-where.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateToOneWithWhereWithoutPaymentInput } from './order-update-to-one-with-where-without-payment.input';

@InputType()
export class OrderUpdateOneWithoutPaymentNestedInput {

    @Field(() => OrderCreateWithoutPaymentInput, {nullable:true})
    @Type(() => OrderCreateWithoutPaymentInput)
    create?: OrderCreateWithoutPaymentInput;

    @Field(() => OrderCreateOrConnectWithoutPaymentInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutPaymentInput)
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput;

    @Field(() => OrderUpsertWithoutPaymentInput, {nullable:true})
    @Type(() => OrderUpsertWithoutPaymentInput)
    upsert?: OrderUpsertWithoutPaymentInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    disconnect?: OrderWhereInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    delete?: OrderWhereInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'paymentId'>;

    @Field(() => OrderUpdateToOneWithWhereWithoutPaymentInput, {nullable:true})
    @Type(() => OrderUpdateToOneWithWhereWithoutPaymentInput)
    update?: OrderUpdateToOneWithWhereWithoutPaymentInput;
}
