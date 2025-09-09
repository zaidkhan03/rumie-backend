import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketParticipant } from './support-ticket-participant.enum';

@InputType()
export class NestedEnumSupportTicketParticipantFilter {

    @Field(() => SupportTicketParticipant, {nullable:true})
    equals?: `${SupportTicketParticipant}`;

    @Field(() => [SupportTicketParticipant], {nullable:true})
    in?: Array<`${SupportTicketParticipant}`>;

    @Field(() => [SupportTicketParticipant], {nullable:true})
    notIn?: Array<`${SupportTicketParticipant}`>;

    @Field(() => NestedEnumSupportTicketParticipantFilter, {nullable:true})
    not?: NestedEnumSupportTicketParticipantFilter;
}
