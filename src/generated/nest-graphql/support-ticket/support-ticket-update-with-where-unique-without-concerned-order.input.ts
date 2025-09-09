import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SupportTicketWhereUniqueInput } from './support-ticket-where-unique.input';
import { Type } from 'class-transformer';
import { SupportTicketUpdateWithoutConcernedOrderInput } from './support-ticket-update-without-concerned-order.input';

@InputType()
export class SupportTicketUpdateWithWhereUniqueWithoutConcernedOrderInput {

    @Field(() => SupportTicketWhereUniqueInput, {nullable:false})
    @Type(() => SupportTicketWhereUniqueInput)
    where!: Prisma.AtLeast<SupportTicketWhereUniqueInput, 'id'>;

    @Field(() => SupportTicketUpdateWithoutConcernedOrderInput, {nullable:false})
    @Type(() => SupportTicketUpdateWithoutConcernedOrderInput)
    data!: SupportTicketUpdateWithoutConcernedOrderInput;
}
