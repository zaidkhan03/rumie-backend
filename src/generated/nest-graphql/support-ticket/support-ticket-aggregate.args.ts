import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupportTicketWhereInput } from './support-ticket-where.input';
import { Type } from 'class-transformer';
import { SupportTicketOrderByWithRelationInput } from './support-ticket-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SupportTicketWhereUniqueInput } from './support-ticket-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SupportTicketCountAggregateInput } from './support-ticket-count-aggregate.input';
import { SupportTicketMinAggregateInput } from './support-ticket-min-aggregate.input';
import { SupportTicketMaxAggregateInput } from './support-ticket-max-aggregate.input';

@ArgsType()
export class SupportTicketAggregateArgs {

    @Field(() => SupportTicketWhereInput, {nullable:true})
    @Type(() => SupportTicketWhereInput)
    where?: SupportTicketWhereInput;

    @Field(() => [SupportTicketOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SupportTicketOrderByWithRelationInput>;

    @Field(() => SupportTicketWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SupportTicketWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SupportTicketCountAggregateInput, {nullable:true})
    _count?: SupportTicketCountAggregateInput;

    @Field(() => SupportTicketMinAggregateInput, {nullable:true})
    _min?: SupportTicketMinAggregateInput;

    @Field(() => SupportTicketMaxAggregateInput, {nullable:true})
    _max?: SupportTicketMaxAggregateInput;
}
