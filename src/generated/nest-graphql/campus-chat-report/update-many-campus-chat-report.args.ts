import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatReportUpdateManyMutationInput } from './campus-chat-report-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CampusChatReportWhereInput } from './campus-chat-report-where.input';

@ArgsType()
export class UpdateManyCampusChatReportArgs {

    @Field(() => CampusChatReportUpdateManyMutationInput, {nullable:false})
    @Type(() => CampusChatReportUpdateManyMutationInput)
    data!: CampusChatReportUpdateManyMutationInput;

    @Field(() => CampusChatReportWhereInput, {nullable:true})
    @Type(() => CampusChatReportWhereInput)
    where?: CampusChatReportWhereInput;
}
