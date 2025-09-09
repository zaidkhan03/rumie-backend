import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SupportTicketCountAggregate } from './support-ticket-count-aggregate.output';
import { SupportTicketMinAggregate } from './support-ticket-min-aggregate.output';
import { SupportTicketMaxAggregate } from './support-ticket-max-aggregate.output';

@ObjectType()
export class AggregateSupportTicket {

    @Field(() => SupportTicketCountAggregate, {nullable:true})
    _count?: SupportTicketCountAggregate;

    @Field(() => SupportTicketMinAggregate, {nullable:true})
    _min?: SupportTicketMinAggregate;

    @Field(() => SupportTicketMaxAggregate, {nullable:true})
    _max?: SupportTicketMaxAggregate;
}
