import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketCreateWithoutConcernedOrderInput } from './support-ticket-create-without-concerned-order.input';
import { Type } from 'class-transformer';
import { SupportTicketCreateOrConnectWithoutConcernedOrderInput } from './support-ticket-create-or-connect-without-concerned-order.input';
import { SupportTicketUpsertWithWhereUniqueWithoutConcernedOrderInput } from './support-ticket-upsert-with-where-unique-without-concerned-order.input';
import { SupportTicketCreateManyConcernedOrderInputEnvelope } from './support-ticket-create-many-concerned-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SupportTicketWhereUniqueInput } from './support-ticket-where-unique.input';
import { SupportTicketUpdateWithWhereUniqueWithoutConcernedOrderInput } from './support-ticket-update-with-where-unique-without-concerned-order.input';
import { SupportTicketUpdateManyWithWhereWithoutConcernedOrderInput } from './support-ticket-update-many-with-where-without-concerned-order.input';
import { SupportTicketScalarWhereInput } from './support-ticket-scalar-where.input';

@InputType()
export class SupportTicketUpdateManyWithoutConcernedOrderNestedInput {

    @Field(() => [SupportTicketCreateWithoutConcernedOrderInput], {nullable:true})
    @Type(() => SupportTicketCreateWithoutConcernedOrderInput)
    create?: Array<SupportTicketCreateWithoutConcernedOrderInput>;

    @Field(() => [SupportTicketCreateOrConnectWithoutConcernedOrderInput], {nullable:true})
    @Type(() => SupportTicketCreateOrConnectWithoutConcernedOrderInput)
    connectOrCreate?: Array<SupportTicketCreateOrConnectWithoutConcernedOrderInput>;

    @Field(() => [SupportTicketUpsertWithWhereUniqueWithoutConcernedOrderInput], {nullable:true})
    @Type(() => SupportTicketUpsertWithWhereUniqueWithoutConcernedOrderInput)
    upsert?: Array<SupportTicketUpsertWithWhereUniqueWithoutConcernedOrderInput>;

    @Field(() => SupportTicketCreateManyConcernedOrderInputEnvelope, {nullable:true})
    @Type(() => SupportTicketCreateManyConcernedOrderInputEnvelope)
    createMany?: SupportTicketCreateManyConcernedOrderInputEnvelope;

    @Field(() => [SupportTicketWhereUniqueInput], {nullable:true})
    @Type(() => SupportTicketWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SupportTicketWhereUniqueInput, 'id'>>;

    @Field(() => [SupportTicketWhereUniqueInput], {nullable:true})
    @Type(() => SupportTicketWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SupportTicketWhereUniqueInput, 'id'>>;

    @Field(() => [SupportTicketWhereUniqueInput], {nullable:true})
    @Type(() => SupportTicketWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SupportTicketWhereUniqueInput, 'id'>>;

    @Field(() => [SupportTicketWhereUniqueInput], {nullable:true})
    @Type(() => SupportTicketWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SupportTicketWhereUniqueInput, 'id'>>;

    @Field(() => [SupportTicketUpdateWithWhereUniqueWithoutConcernedOrderInput], {nullable:true})
    @Type(() => SupportTicketUpdateWithWhereUniqueWithoutConcernedOrderInput)
    update?: Array<SupportTicketUpdateWithWhereUniqueWithoutConcernedOrderInput>;

    @Field(() => [SupportTicketUpdateManyWithWhereWithoutConcernedOrderInput], {nullable:true})
    @Type(() => SupportTicketUpdateManyWithWhereWithoutConcernedOrderInput)
    updateMany?: Array<SupportTicketUpdateManyWithWhereWithoutConcernedOrderInput>;

    @Field(() => [SupportTicketScalarWhereInput], {nullable:true})
    @Type(() => SupportTicketScalarWhereInput)
    deleteMany?: Array<SupportTicketScalarWhereInput>;
}
