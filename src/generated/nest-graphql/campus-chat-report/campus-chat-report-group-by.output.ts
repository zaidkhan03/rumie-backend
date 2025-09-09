import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CampusChatReportReason } from '../prisma/campus-chat-report-reason.enum';
import { CampusChatReportCountAggregate } from './campus-chat-report-count-aggregate.output';
import { CampusChatReportMinAggregate } from './campus-chat-report-min-aggregate.output';
import { CampusChatReportMaxAggregate } from './campus-chat-report-max-aggregate.output';

@ObjectType()
export class CampusChatReportGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    messageId!: string;

    @Field(() => String, {nullable:true})
    commentId?: string;

    @Field(() => String, {nullable:false})
    reporterId!: string;

    @Field(() => CampusChatReportReason, {nullable:false})
    reason!: `${CampusChatReportReason}`;

    @Field(() => String, {nullable:true})
    details?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => CampusChatReportCountAggregate, {nullable:true})
    _count?: CampusChatReportCountAggregate;

    @Field(() => CampusChatReportMinAggregate, {nullable:true})
    _min?: CampusChatReportMinAggregate;

    @Field(() => CampusChatReportMaxAggregate, {nullable:true})
    _max?: CampusChatReportMaxAggregate;
}
