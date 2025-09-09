import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutSupportTicketsInput } from './order-update-without-support-tickets.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutSupportTicketsInput } from './order-create-without-support-tickets.input';
import { OrderWhereInput } from './order-where.input';

@InputType()
export class OrderUpsertWithoutSupportTicketsInput {

    @Field(() => OrderUpdateWithoutSupportTicketsInput, {nullable:false})
    @Type(() => OrderUpdateWithoutSupportTicketsInput)
    update!: OrderUpdateWithoutSupportTicketsInput;

    @Field(() => OrderCreateWithoutSupportTicketsInput, {nullable:false})
    @Type(() => OrderCreateWithoutSupportTicketsInput)
    create!: OrderCreateWithoutSupportTicketsInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;
}
