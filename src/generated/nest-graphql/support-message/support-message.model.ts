import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SupportTicketParticipant } from '../prisma/support-ticket-participant.enum';

@ObjectType()
export class SupportMessage {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => SupportTicketParticipant, {nullable:false})
    sender!: `${SupportTicketParticipant}`;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
