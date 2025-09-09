import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumCampusChatReportReasonWithAggregatesFilter } from '../prisma/enum-campus-chat-report-reason-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CampusChatReportScalarWhereWithAggregatesInput {

    @Field(() => [CampusChatReportScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CampusChatReportScalarWhereWithAggregatesInput>;

    @Field(() => [CampusChatReportScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CampusChatReportScalarWhereWithAggregatesInput>;

    @Field(() => [CampusChatReportScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CampusChatReportScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    messageId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    commentId?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    reporterId?: StringWithAggregatesFilter;

    @Field(() => EnumCampusChatReportReasonWithAggregatesFilter, {nullable:true})
    reason?: EnumCampusChatReportReasonWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    details?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
