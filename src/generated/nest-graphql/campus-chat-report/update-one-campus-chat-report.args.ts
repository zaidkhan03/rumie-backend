import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatReportUpdateInput } from './campus-chat-report-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CampusChatReportWhereUniqueInput } from './campus-chat-report-where-unique.input';

@ArgsType()
export class UpdateOneCampusChatReportArgs {

    @Field(() => CampusChatReportUpdateInput, {nullable:false})
    @Type(() => CampusChatReportUpdateInput)
    data!: CampusChatReportUpdateInput;

    @Field(() => CampusChatReportWhereUniqueInput, {nullable:false})
    @Type(() => CampusChatReportWhereUniqueInput)
    where!: Prisma.AtLeast<CampusChatReportWhereUniqueInput, 'id'>;
}
