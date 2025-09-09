import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketParticipant } from './support-ticket-participant.enum';

@InputType()
export class SupportMessageObjectEqualityInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => SupportTicketParticipant, {nullable:false})
    sender!: `${SupportTicketParticipant}`;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
}
