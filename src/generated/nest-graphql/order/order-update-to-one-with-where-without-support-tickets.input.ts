import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutSupportTicketsInput } from './order-update-without-support-tickets.input';

@InputType()
export class OrderUpdateToOneWithWhereWithoutSupportTicketsInput {

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;

    @Field(() => OrderUpdateWithoutSupportTicketsInput, {nullable:false})
    @Type(() => OrderUpdateWithoutSupportTicketsInput)
    data!: OrderUpdateWithoutSupportTicketsInput;
}
