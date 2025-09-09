import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumSupportTicketParticipantFilter } from '../prisma/enum-support-ticket-participant-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SupportMessageWhereInput {

    @Field(() => [SupportMessageWhereInput], {nullable:true})
    AND?: Array<SupportMessageWhereInput>;

    @Field(() => [SupportMessageWhereInput], {nullable:true})
    OR?: Array<SupportMessageWhereInput>;

    @Field(() => [SupportMessageWhereInput], {nullable:true})
    NOT?: Array<SupportMessageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumSupportTicketParticipantFilter, {nullable:true})
    sender?: EnumSupportTicketParticipantFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
