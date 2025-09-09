import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumCampusChatReportActionNullableFilter } from '../prisma/enum-campus-chat-report-action-nullable-filter.input';

@InputType()
export class CampusChatReportStatusWhereInput {

    @Field(() => [CampusChatReportStatusWhereInput], {nullable:true})
    AND?: Array<CampusChatReportStatusWhereInput>;

    @Field(() => [CampusChatReportStatusWhereInput], {nullable:true})
    OR?: Array<CampusChatReportStatusWhereInput>;

    @Field(() => [CampusChatReportStatusWhereInput], {nullable:true})
    NOT?: Array<CampusChatReportStatusWhereInput>;

    @Field(() => BoolFilter, {nullable:true})
    reviewed?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    reviewedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    reviewedBy?: StringNullableFilter;

    @Field(() => EnumCampusChatReportActionNullableFilter, {nullable:true})
    action?: EnumCampusChatReportActionNullableFilter;
}
