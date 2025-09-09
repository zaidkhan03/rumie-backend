import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatReportStatusCreateInput } from './campus-chat-report-status-create.input';
import { Type } from 'class-transformer';

@InputType()
export class CampusChatReportStatusCreateEnvelopeInput {

    @Field(() => CampusChatReportStatusCreateInput, {nullable:true})
    @Type(() => CampusChatReportStatusCreateInput)
    set?: CampusChatReportStatusCreateInput;
}
