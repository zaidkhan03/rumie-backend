import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReportReason } from './campus-chat-report-reason.enum';
import { NestedEnumCampusChatReportReasonFilter } from './nested-enum-campus-chat-report-reason-filter.input';

@InputType()
export class EnumCampusChatReportReasonFilter {

    @Field(() => CampusChatReportReason, {nullable:true})
    equals?: `${CampusChatReportReason}`;

    @Field(() => [CampusChatReportReason], {nullable:true})
    in?: Array<`${CampusChatReportReason}`>;

    @Field(() => [CampusChatReportReason], {nullable:true})
    notIn?: Array<`${CampusChatReportReason}`>;

    @Field(() => NestedEnumCampusChatReportReasonFilter, {nullable:true})
    not?: NestedEnumCampusChatReportReasonFilter;
}
