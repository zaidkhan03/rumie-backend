import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutSupportTicketsInput } from './order-create-without-support-tickets.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutSupportTicketsInput } from './order-create-or-connect-without-support-tickets.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutSupportTicketsInput {

    @Field(() => OrderCreateWithoutSupportTicketsInput, {nullable:true})
    @Type(() => OrderCreateWithoutSupportTicketsInput)
    create?: OrderCreateWithoutSupportTicketsInput;

    @Field(() => OrderCreateOrConnectWithoutSupportTicketsInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutSupportTicketsInput)
    connectOrCreate?: OrderCreateOrConnectWithoutSupportTicketsInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'paymentId'>;
}
