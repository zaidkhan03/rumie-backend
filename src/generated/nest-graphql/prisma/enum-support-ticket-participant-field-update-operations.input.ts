import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketParticipant } from './support-ticket-participant.enum';

@InputType()
export class EnumSupportTicketParticipantFieldUpdateOperationsInput {

    @Field(() => SupportTicketParticipant, {nullable:true})
    set?: `${SupportTicketParticipant}`;
}
