import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReportWhereInput } from './campus-chat-report-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumCampusChatReportReasonFilter } from '../prisma/enum-campus-chat-report-reason-filter.input';
import { CampusChatReportStatusCompositeFilter } from '../prisma/campus-chat-report-status-composite-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CampusChatReportWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [CampusChatReportWhereInput], {nullable:true})
    AND?: Array<CampusChatReportWhereInput>;

    @Field(() => [CampusChatReportWhereInput], {nullable:true})
    OR?: Array<CampusChatReportWhereInput>;

    @Field(() => [CampusChatReportWhereInput], {nullable:true})
    NOT?: Array<CampusChatReportWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    messageId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    commentId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    reporterId?: StringFilter;

    @Field(() => EnumCampusChatReportReasonFilter, {nullable:true})
    reason?: EnumCampusChatReportReasonFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    details?: StringNullableFilter;

    @Field(() => CampusChatReportStatusCompositeFilter, {nullable:true})
    status?: CampusChatReportStatusCompositeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
