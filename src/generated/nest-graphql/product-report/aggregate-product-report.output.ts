import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductReportCountAggregate } from './product-report-count-aggregate.output';
import { ProductReportMinAggregate } from './product-report-min-aggregate.output';
import { ProductReportMaxAggregate } from './product-report-max-aggregate.output';

@ObjectType()
export class AggregateProductReport {

    @Field(() => ProductReportCountAggregate, {nullable:true})
    _count?: ProductReportCountAggregate;

    @Field(() => ProductReportMinAggregate, {nullable:true})
    _min?: ProductReportMinAggregate;

    @Field(() => ProductReportMaxAggregate, {nullable:true})
    _max?: ProductReportMaxAggregate;
}
