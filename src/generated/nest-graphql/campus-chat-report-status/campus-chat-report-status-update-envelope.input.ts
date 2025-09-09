import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReportStatusCreateInput } from './campus-chat-report-status-create.input';
import { Type } from 'class-transformer';
import { CampusChatReportStatusUpdateInput } from './campus-chat-report-status-update.input';

@InputType()
export class CampusChatReportStatusUpdateEnvelopeInput {

    @Field(() => CampusChatReportStatusCreateInput, {nullable:true})
    @Type(() => CampusChatReportStatusCreateInput)
    set?: CampusChatReportStatusCreateInput;

    @Field(() => CampusChatReportStatusUpdateInput, {nullable:true})
    @Type(() => CampusChatReportStatusUpdateInput)
    update?: CampusChatReportStatusUpdateInput;
}
