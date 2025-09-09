import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CampusChatReportWhereUniqueInput } from './campus-chat-report-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneCampusChatReportArgs {

    @Field(() => CampusChatReportWhereUniqueInput, {nullable:false})
    @Type(() => CampusChatReportWhereUniqueInput)
    where!: Prisma.AtLeast<CampusChatReportWhereUniqueInput, 'id'>;
}
