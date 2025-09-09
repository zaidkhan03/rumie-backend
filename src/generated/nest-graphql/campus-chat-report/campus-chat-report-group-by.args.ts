import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatReportWhereInput } from './campus-chat-report-where.input';
import { Type } from 'class-transformer';
import { CampusChatReportOrderByWithAggregationInput } from './campus-chat-report-order-by-with-aggregation.input';
import { CampusChatReportScalarFieldEnum } from './campus-chat-report-scalar-field.enum';
import { CampusChatReportScalarWhereWithAggregatesInput } from './campus-chat-report-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CampusChatReportCountAggregateInput } from './campus-chat-report-count-aggregate.input';
import { CampusChatReportMinAggregateInput } from './campus-chat-report-min-aggregate.input';
import { CampusChatReportMaxAggregateInput } from './campus-chat-report-max-aggregate.input';

@ArgsType()
export class CampusChatReportGroupByArgs {

    @Field(() => CampusChatReportWhereInput, {nullable:true})
    @Type(() => CampusChatReportWhereInput)
    where?: CampusChatReportWhereInput;

    @Field(() => [CampusChatReportOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CampusChatReportOrderByWithAggregationInput>;

    @Field(() => [CampusChatReportScalarFieldEnum], {nullable:false})
    by!: Array<`${CampusChatReportScalarFieldEnum}`>;

    @Field(() => CampusChatReportScalarWhereWithAggregatesInput, {nullable:true})
    having?: CampusChatReportScalarWhereWithAggregatesInput;

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
