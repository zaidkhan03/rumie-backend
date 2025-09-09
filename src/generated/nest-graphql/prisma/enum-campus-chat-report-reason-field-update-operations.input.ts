import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReportReason } from './campus-chat-report-reason.enum';

@InputType()
export class EnumCampusChatReportReasonFieldUpdateOperationsInput {

    @Field(() => CampusChatReportReason, {nullable:true})
    set?: `${CampusChatReportReason}`;
}
