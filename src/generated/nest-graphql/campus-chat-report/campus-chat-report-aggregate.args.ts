import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatReportWhereInput } from './campus-chat-report-where.input';
import { Type } from 'class-transformer';
import { CampusChatReportOrderByWithRelationInput } from './campus-chat-report-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CampusChatReportWhereUniqueInput } from './campus-chat-report-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CampusChatReportCountAggregateInput } from './campus-chat-report-count-aggregate.input';
import { CampusChatReportMinAggregateInput } from './campus-chat-report-min-aggregate.input';
import { CampusChatReportMaxAggregateInput } from './campus-chat-report-max-aggregate.input';

@ArgsType()
export class CampusChatReportAggregateArgs {

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

    @Field(() => CampusChatReportCountAggregateInput, {nullable:true})
    _count?: CampusChatReportCountAggregateInput;

    @Field(() => CampusChatReportMinAggregateInput, {nullable:true})
    _min?: CampusChatReportMinAggregateInput;

    @Field(() => CampusChatReportMaxAggregateInput, {nullable:true})
    _max?: CampusChatReportMaxAggregateInput;
}
