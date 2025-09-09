import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SupportTicketWhereUniqueInput } from './support-ticket-where-unique.input';
import { Type } from 'class-transformer';
import { SupportTicketCreateWithoutConcernedOrderInput } from './support-ticket-create-without-concerned-order.input';

@InputType()
export class SupportTicketCreateOrConnectWithoutConcernedOrderInput {

    @Field(() => SupportTicketWhereUniqueInput, {nullable:false})
    @Type(() => SupportTicketWhereUniqueInput)
    where!: Prisma.AtLeast<SupportTicketWhereUniqueInput, 'id'>;

    @Field(() => SupportTicketCreateWithoutConcernedOrderInput, {nullable:false})
    @Type(() => SupportTicketCreateWithoutConcernedOrderInput)
    create!: SupportTicketCreateWithoutConcernedOrderInput;
}
