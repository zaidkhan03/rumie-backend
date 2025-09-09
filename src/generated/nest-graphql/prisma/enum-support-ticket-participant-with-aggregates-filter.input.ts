import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketParticipant } from './support-ticket-participant.enum';
import { NestedEnumSupportTicketParticipantWithAggregatesFilter } from './nested-enum-support-ticket-participant-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumSupportTicketParticipantFilter } from './nested-enum-support-ticket-participant-filter.input';

@InputType()
export class EnumSupportTicketParticipantWithAggregatesFilter {

    @Field(() => SupportTicketParticipant, {nullable:true})
    equals?: `${SupportTicketParticipant}`;

    @Field(() => [SupportTicketParticipant], {nullable:true})
    in?: Array<`${SupportTicketParticipant}`>;

    @Field(() => [SupportTicketParticipant], {nullable:true})
    notIn?: Array<`${SupportTicketParticipant}`>;

    @Field(() => NestedEnumSupportTicketParticipantWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSupportTicketParticipantWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumSupportTicketParticipantFilter, {nullable:true})
    _min?: NestedEnumSupportTicketParticipantFilter;

    @Field(() => NestedEnumSupportTicketParticipantFilter, {nullable:true})
    _max?: NestedEnumSupportTicketParticipantFilter;
}
