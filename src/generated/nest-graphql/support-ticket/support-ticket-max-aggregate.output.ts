import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SupportTicketType } from '../prisma/support-ticket-type.enum';
import { SupportTicketParticipant } from '../prisma/support-ticket-participant.enum';

@ObjectType()
export class SupportTicketMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => SupportTicketType, {nullable:true})
    type?: `${SupportTicketType}`;

    @Field(() => String, {nullable:true})
    issue?: string;

    @Field(() => SupportTicketParticipant, {nullable:true})
    initiator?: `${SupportTicketParticipant}`;

    @Field(() => String, {nullable:true})
    associatedUserId?: string;

    @Field(() => Boolean, {nullable:true})
    resolved?: boolean;

    @Field(() => String, {nullable:true})
    concernedId?: string;

    @Field(() => String, {nullable:true})
    userLastSeen?: string;

    @Field(() => String, {nullable:true})
    adminLastSeen?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
