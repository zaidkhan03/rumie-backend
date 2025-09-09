import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumSupportTicketTypeFilter } from '../prisma/enum-support-ticket-type-filter.input';
import { EnumSupportTicketParticipantFilter } from '../prisma/enum-support-ticket-participant-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SupportTicketScalarWhereInput {

    @Field(() => [SupportTicketScalarWhereInput], {nullable:true})
    AND?: Array<SupportTicketScalarWhereInput>;

    @Field(() => [SupportTicketScalarWhereInput], {nullable:true})
    OR?: Array<SupportTicketScalarWhereInput>;

    @Field(() => [SupportTicketScalarWhereInput], {nullable:true})
    NOT?: Array<SupportTicketScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumSupportTicketTypeFilter, {nullable:true})
    type?: EnumSupportTicketTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    issue?: StringFilter;

    @Field(() => EnumSupportTicketParticipantFilter, {nullable:true})
    initiator?: EnumSupportTicketParticipantFilter;

    @Field(() => StringFilter, {nullable:true})
    associatedUserId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    resolved?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    concernedId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userLastSeen?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    adminLastSeen?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
