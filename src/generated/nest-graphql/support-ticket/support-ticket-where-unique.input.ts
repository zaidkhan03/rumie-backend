import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketWhereInput } from './support-ticket-where.input';
import { EnumSupportTicketTypeFilter } from '../prisma/enum-support-ticket-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { SupportMessageObjectEqualityInput } from '../prisma/support-message-object-equality.input';
import { EnumSupportTicketParticipantFilter } from '../prisma/enum-support-ticket-participant-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OrderNullableRelationFilter } from '../order/order-nullable-relation-filter.input';

@InputType()
export class SupportTicketWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [SupportTicketWhereInput], {nullable:true})
    AND?: Array<SupportTicketWhereInput>;

    @Field(() => [SupportTicketWhereInput], {nullable:true})
    OR?: Array<SupportTicketWhereInput>;

    @Field(() => [SupportTicketWhereInput], {nullable:true})
    NOT?: Array<SupportTicketWhereInput>;

    @Field(() => EnumSupportTicketTypeFilter, {nullable:true})
    type?: EnumSupportTicketTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    issue?: StringFilter;

    @Field(() => [SupportMessageObjectEqualityInput], {nullable:true})
    messages?: Array<SupportMessageObjectEqualityInput>;

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

    @Field(() => OrderNullableRelationFilter, {nullable:true})
    concernedOrder?: OrderNullableRelationFilter;
}
