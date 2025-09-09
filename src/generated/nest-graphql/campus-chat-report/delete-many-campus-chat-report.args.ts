import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatReportWhereInput } from './campus-chat-report-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCampusChatReportArgs {

    @Field(() => CampusChatReportWhereInput, {nullable:true})
    @Type(() => CampusChatReportWhereInput)
    where?: CampusChatReportWhereInput;
}
