import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketParticipant } from './support-ticket-participant.enum';
import { NestedEnumSupportTicketParticipantFilter } from './nested-enum-support-ticket-participant-filter.input';

@InputType()
export class EnumSupportTicketParticipantFilter {

    @Field(() => SupportTicketParticipant, {nullable:true})
    equals?: `${SupportTicketParticipant}`;

    @Field(() => [SupportTicketParticipant], {nullable:true})
    in?: Array<`${SupportTicketParticipant}`>;

    @Field(() => [SupportTicketParticipant], {nullable:true})
    notIn?: Array<`${SupportTicketParticipant}`>;

    @Field(() => NestedEnumSupportTicketParticipantFilter, {nullable:true})
    not?: NestedEnumSupportTicketParticipantFilter;
}
