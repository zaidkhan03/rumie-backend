import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReportAction } from './campus-chat-report-action.enum';

@InputType()
export class NestedEnumCampusChatReportActionNullableFilter {

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
