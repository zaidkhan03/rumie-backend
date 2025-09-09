import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutSupportTicketsInput } from './order-create-without-support-tickets.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutSupportTicketsInput } from './order-create-or-connect-without-support-tickets.input';
import { OrderUpsertWithoutSupportTicketsInput } from './order-upsert-without-support-tickets.input';
import { OrderWhereInput } from './order-where.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateToOneWithWhereWithoutSupportTicketsInput } from './order-update-to-one-with-where-without-support-tickets.input';

@InputType()
export class OrderUpdateOneWithoutSupportTicketsNestedInput {

    @Field(() => OrderCreateWithoutSupportTicketsInput, {nullable:true})
    @Type(() => OrderCreateWithoutSupportTicketsInput)
    create?: OrderCreateWithoutSupportTicketsInput;

    @Field(() => OrderCreateOrConnectWithoutSupportTicketsInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutSupportTicketsInput)
    connectOrCreate?: OrderCreateOrConnectWithoutSupportTicketsInput;

    @Field(() => OrderUpsertWithoutSupportTicketsInput, {nullable:true})
    @Type(() => OrderUpsertWithoutSupportTicketsInput)
    upsert?: OrderUpsertWithoutSupportTicketsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    delete?: OrderWhereInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'paymentId'>;

    @Field(() => OrderUpdateToOneWithWhereWithoutSupportTicketsInput, {nullable:true})
    @Type(() => OrderUpdateToOneWithWhereWithoutSupportTicketsInput)
    update?: OrderUpdateToOneWithWhereWithoutSupportTicketsInput;
}
