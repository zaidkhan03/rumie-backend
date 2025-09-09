import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CampusChatReportCountAggregate } from './campus-chat-report-count-aggregate.output';
import { CampusChatReportMinAggregate } from './campus-chat-report-min-aggregate.output';
import { CampusChatReportMaxAggregate } from './campus-chat-report-max-aggregate.output';

@ObjectType()
export class AggregateCampusChatReport {

    @Field(() => CampusChatReportCountAggregate, {nullable:true})
    _count?: CampusChatReportCountAggregate;

    @Field(() => CampusChatReportMinAggregate, {nullable:true})
    _min?: CampusChatReportMinAggregate;

    @Field(() => CampusChatReportMaxAggregate, {nullable:true})
    _max?: CampusChatReportMaxAggregate;
}
