import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReportReason } from './campus-chat-report-reason.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCampusChatReportReasonFilter } from './nested-enum-campus-chat-report-reason-filter.input';

@InputType()
export class NestedEnumCampusChatReportReasonWithAggregatesFilter {

    @Field(() => CampusChatReportReason, {nullable:true})
    equals?: `${CampusChatReportReason}`;

    @Field(() => [CampusChatReportReason], {nullable:true})
    in?: Array<`${CampusChatReportReason}`>;

    @Field(() => [CampusChatReportReason], {nullable:true})
    notIn?: Array<`${CampusChatReportReason}`>;

    @Field(() => NestedEnumCampusChatReportReasonWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCampusChatReportReasonWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCampusChatReportReasonFilter, {nullable:true})
    _min?: NestedEnumCampusChatReportReasonFilter;

    @Field(() => NestedEnumCampusChatReportReasonFilter, {nullable:true})
    _max?: NestedEnumCampusChatReportReasonFilter;
}
