import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReportAction } from './campus-chat-report-action.enum';
import { NestedEnumCampusChatReportActionNullableFilter } from './nested-enum-campus-chat-report-action-nullable-filter.input';

@InputType()
export class EnumCampusChatReportActionNullableFilter {

    @Field(() => CampusChatReportAction, {nullable:true})
    equals?: `${CampusChatReportAction}`;

    @Field(() => [CampusChatReportAction], {nullable:true})
    in?: Array<`${CampusChatReportAction}`>;

    @Field(() => [CampusChatReportAction], {nullable:true})
    notIn?: Array<`${CampusChatReportAction}`>;

    @Field(() => NestedEnumCampusChatReportActionNullableFilter, {nullable:true})
    not?: NestedEnumCampusChatReportActionNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
