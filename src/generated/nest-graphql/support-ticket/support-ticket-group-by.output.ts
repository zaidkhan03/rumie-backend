import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SupportTicketType } from '../prisma/support-ticket-type.enum';
import { SupportTicketParticipant } from '../prisma/support-ticket-participant.enum';
import { SupportTicketCountAggregate } from './support-ticket-count-aggregate.output';
import { SupportTicketMinAggregate } from './support-ticket-min-aggregate.output';
import { SupportTicketMaxAggregate } from './support-ticket-max-aggregate.output';

@ObjectType()
export class SupportTicketGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => SupportTicketType, {nullable:false})
    type!: `${SupportTicketType}`;

    @Field(() => String, {nullable:false})
    issue!: string;

    @Field(() => SupportTicketParticipant, {nullable:false})
    initiator!: `${SupportTicketParticipant}`;

    @Field(() => String, {nullable:false})
    associatedUserId!: string;

    @Field(() => Boolean, {nullable:false})
    resolved!: boolean;

    @Field(() => String, {nullable:true})
    concernedId?: string;

    @Field(() => String, {nullable:true})
    userLastSeen?: string;

    @Field(() => String, {nullable:true})
    adminLastSeen?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => SupportTicketCountAggregate, {nullable:true})
    _count?: SupportTicketCountAggregate;

    @Field(() => SupportTicketMinAggregate, {nullable:true})
    _min?: SupportTicketMinAggregate;

    @Field(() => SupportTicketMaxAggregate, {nullable:true})
    _max?: SupportTicketMaxAggregate;
}
