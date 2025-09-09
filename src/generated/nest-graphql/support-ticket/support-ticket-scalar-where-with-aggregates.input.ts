import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumSupportTicketTypeWithAggregatesFilter } from '../prisma/enum-support-ticket-type-with-aggregates-filter.input';
import { EnumSupportTicketParticipantWithAggregatesFilter } from '../prisma/enum-support-ticket-participant-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SupportTicketScalarWhereWithAggregatesInput {

    @Field(() => [SupportTicketScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SupportTicketScalarWhereWithAggregatesInput>;

    @Field(() => [SupportTicketScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SupportTicketScalarWhereWithAggregatesInput>;

    @Field(() => [SupportTicketScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SupportTicketScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumSupportTicketTypeWithAggregatesFilter, {nullable:true})
    type?: EnumSupportTicketTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    issue?: StringWithAggregatesFilter;

    @Field(() => EnumSupportTicketParticipantWithAggregatesFilter, {nullable:true})
    initiator?: EnumSupportTicketParticipantWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    associatedUserId?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    resolved?: BoolWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    concernedId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userLastSeen?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    adminLastSeen?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
