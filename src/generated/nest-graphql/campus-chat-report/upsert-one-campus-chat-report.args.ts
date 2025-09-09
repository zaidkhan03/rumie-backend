import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CampusChatReportWhereUniqueInput } from './campus-chat-report-where-unique.input';
import { Type } from 'class-transformer';
import { CampusChatReportCreateInput } from './campus-chat-report-create.input';
import { CampusChatReportUpdateInput } from './campus-chat-report-update.input';

@ArgsType()
export class UpsertOneCampusChatReportArgs {

    @Field(() => CampusChatReportWhereUniqueInput, {nullable:false})
    @Type(() => CampusChatReportWhereUniqueInput)
    where!: Prisma.AtLeast<CampusChatReportWhereUniqueInput, 'id'>;

    @Field(() => CampusChatReportCreateInput, {nullable:false})
    @Type(() => CampusChatReportCreateInput)
    create!: CampusChatReportCreateInput;

    @Field(() => CampusChatReportUpdateInput, {nullable:false})
    @Type(() => CampusChatReportUpdateInput)
    update!: CampusChatReportUpdateInput;
}
