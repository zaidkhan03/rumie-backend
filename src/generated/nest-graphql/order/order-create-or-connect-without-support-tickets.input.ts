import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutSupportTicketsInput } from './order-create-without-support-tickets.input';

@InputType()
export class OrderCreateOrConnectWithoutSupportTicketsInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id' | 'paymentId'>;

    @Field(() => OrderCreateWithoutSupportTicketsInput, {nullable:false})
    @Type(() => OrderCreateWithoutSupportTicketsInput)
    create!: OrderCreateWithoutSupportTicketsInput;
}
