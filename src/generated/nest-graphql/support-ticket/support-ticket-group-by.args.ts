import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupportTicketWhereInput } from './support-ticket-where.input';
import { Type } from 'class-transformer';
import { SupportTicketOrderByWithAggregationInput } from './support-ticket-order-by-with-aggregation.input';
import { SupportTicketScalarFieldEnum } from './support-ticket-scalar-field.enum';
import { SupportTicketScalarWhereWithAggregatesInput } from './support-ticket-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SupportTicketCountAggregateInput } from './support-ticket-count-aggregate.input';
import { SupportTicketMinAggregateInput } from './support-ticket-min-aggregate.input';
import { SupportTicketMaxAggregateInput } from './support-ticket-max-aggregate.input';

@ArgsType()
export class SupportTicketGroupByArgs {

    @Field(() => SupportTicketWhereInput, {nullable:true})
    @Type(() => SupportTicketWhereInput)
    where?: SupportTicketWhereInput;

    @Field(() => [SupportTicketOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SupportTicketOrderByWithAggregationInput>;

    @Field(() => [SupportTicketScalarFieldEnum], {nullable:false})
    by!: Array<`${SupportTicketScalarFieldEnum}`>;

    @Field(() => SupportTicketScalarWhereWithAggregatesInput, {nullable:true})
    having?: SupportTicketScalarWhereWithAggregatesInput;

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
