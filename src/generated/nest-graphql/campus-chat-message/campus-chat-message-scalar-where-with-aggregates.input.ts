import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumCampusChatMessageTypeWithAggregatesFilter } from '../prisma/enum-campus-chat-message-type-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumCampusChatMessageFlaggedByNullableWithAggregatesFilter } from '../prisma/enum-campus-chat-message-flagged-by-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CampusChatMessageScalarWhereWithAggregatesInput {

    @Field(() => [CampusChatMessageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CampusChatMessageScalarWhereWithAggregatesInput>;

    @Field(() => [CampusChatMessageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CampusChatMessageScalarWhereWithAggregatesInput>;

    @Field(() => [CampusChatMessageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CampusChatMessageScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    chatId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    clientId?: StringWithAggregatesFilter;

    @Field(() => EnumCampusChatMessageTypeWithAggregatesFilter, {nullable:true})
    type?: EnumCampusChatMessageTypeWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    content?: JsonWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    reportCount?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    flagged?: BoolWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    flaggedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => EnumCampusChatMessageFlaggedByNullableWithAggregatesFilter, {nullable:true})
    flaggedBy?: EnumCampusChatMessageFlaggedByNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
