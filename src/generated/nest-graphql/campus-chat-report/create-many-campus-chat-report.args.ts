import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatReportCreateManyInput } from './campus-chat-report-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCampusChatReportArgs {

    @Field(() => [CampusChatReportCreateManyInput], {nullable:false})
    @Type(() => CampusChatReportCreateManyInput)
    data!: Array<CampusChatReportCreateManyInput>;
}
