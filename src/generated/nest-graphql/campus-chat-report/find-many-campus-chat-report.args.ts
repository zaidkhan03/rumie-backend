import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatReportWhereInput } from './campus-chat-report-where.input';
import { Type } from 'class-transformer';
import { CampusChatReportOrderByWithRelationInput } from './campus-chat-report-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CampusChatReportWhereUniqueInput } from './campus-chat-report-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CampusChatReportScalarFieldEnum } from './campus-chat-report-scalar-field.enum';

@ArgsType()
export class FindManyCampusChatReportArgs {

    @Field(() => CampusChatReportWhereInput, {nullable:true})
    @Type(() => CampusChatReportWhereInput)
    where?: CampusChatReportWhereInput;

    @Field(() => [CampusChatReportOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CampusChatReportOrderByWithRelationInput>;

    @Field(() => CampusChatReportWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CampusChatReportWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CampusChatReportScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CampusChatReportScalarFieldEnum}`>;
}
