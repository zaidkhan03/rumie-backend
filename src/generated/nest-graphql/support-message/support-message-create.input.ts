import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketParticipant } from '../prisma/support-ticket-participant.enum';

@InputType()
export class SupportMessageCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => SupportTicketParticipant, {nullable:false})
    sender!: `${SupportTicketParticipant}`;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
