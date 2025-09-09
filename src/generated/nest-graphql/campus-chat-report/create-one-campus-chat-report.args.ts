import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatReportCreateInput } from './campus-chat-report-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCampusChatReportArgs {

    @Field(() => CampusChatReportCreateInput, {nullable:false})
    @Type(() => CampusChatReportCreateInput)
    data!: CampusChatReportCreateInput;
}
