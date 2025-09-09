import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductReportReason } from '../prisma/product-report-reason.enum';
import { ProductReportCountAggregate } from './product-report-count-aggregate.output';
import { ProductReportMinAggregate } from './product-report-min-aggregate.output';
import { ProductReportMaxAggregate } from './product-report-max-aggregate.output';

@ObjectType()
export class ProductReportGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    reporterId!: string;

    @Field(() => ProductReportReason, {nullable:false})
    reason!: `${ProductReportReason}`;

    @Field(() => String, {nullable:true})
    details?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ProductReportCountAggregate, {nullable:true})
    _count?: ProductReportCountAggregate;

    @Field(() => ProductReportMinAggregate, {nullable:true})
    _min?: ProductReportMinAggregate;

    @Field(() => ProductReportMaxAggregate, {nullable:true})
    _max?: ProductReportMaxAggregate;
}
