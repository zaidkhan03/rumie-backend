import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketCreateWithoutConcernedOrderInput } from './support-ticket-create-without-concerned-order.input';
import { Type } from 'class-transformer';
import { SupportTicketCreateOrConnectWithoutConcernedOrderInput } from './support-ticket-create-or-connect-without-concerned-order.input';
import { SupportTicketCreateManyConcernedOrderInputEnvelope } from './support-ticket-create-many-concerned-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SupportTicketWhereUniqueInput } from './support-ticket-where-unique.input';

@InputType()
export class SupportTicketUncheckedCreateNestedManyWithoutConcernedOrderInput {

    @Field(() => [SupportTicketCreateWithoutConcernedOrderInput], {nullable:true})
    @Type(() => SupportTicketCreateWithoutConcernedOrderInput)
    create?: Array<SupportTicketCreateWithoutConcernedOrderInput>;

    @Field(() => [SupportTicketCreateOrConnectWithoutConcernedOrderInput], {nullable:true})
    @Type(() => SupportTicketCreateOrConnectWithoutConcernedOrderInput)
    connectOrCreate?: Array<SupportTicketCreateOrConnectWithoutConcernedOrderInput>;

    @Field(() => SupportTicketCreateManyConcernedOrderInputEnvelope, {nullable:true})
    @Type(() => SupportTicketCreateManyConcernedOrderInputEnvelope)
    createMany?: SupportTicketCreateManyConcernedOrderInputEnvelope;

    @Field(() => [SupportTicketWhereUniqueInput], {nullable:true})
    @Type(() => SupportTicketWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SupportTicketWhereUniqueInput, 'id'>>;
}
