import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReportStatusObjectEqualityInput } from './campus-chat-report-status-object-equality.input';
import { CampusChatReportStatusWhereInput } from '../campus-chat-report-status/campus-chat-report-status-where.input';

@InputType()
export class CampusChatReportStatusCompositeFilter {

    @Field(() => CampusChatReportStatusObjectEqualityInput, {nullable:true})
    equals?: CampusChatReportStatusObjectEqualityInput;

    @Field(() => CampusChatReportStatusWhereInput, {nullable:true})
    is?: CampusChatReportStatusWhereInput;

    @Field(() => CampusChatReportStatusWhereInput, {nullable:true})
    isNot?: CampusChatReportStatusWhereInput;
}
