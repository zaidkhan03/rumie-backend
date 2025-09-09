import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductReportWhereInput } from './product-report-where.input';
import { Type } from 'class-transformer';
import { ProductReportOrderByWithAggregationInput } from './product-report-order-by-with-aggregation.input';
import { ProductReportScalarFieldEnum } from './product-report-scalar-field.enum';
import { ProductReportScalarWhereWithAggregatesInput } from './product-report-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductReportCountAggregateInput } from './product-report-count-aggregate.input';
import { ProductReportMinAggregateInput } from './product-report-min-aggregate.input';
import { ProductReportMaxAggregateInput } from './product-report-max-aggregate.input';

@ArgsType()
export class ProductReportGroupByArgs {

    @Field(() => ProductReportWhereInput, {nullable:true})
    @Type(() => ProductReportWhereInput)
    where?: ProductReportWhereInput;

    @Field(() => [ProductReportOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductReportOrderByWithAggregationInput>;

    @Field(() => [ProductReportScalarFieldEnum], {nullable:false})
    by!: Array<`${ProductReportScalarFieldEnum}`>;

    @Field(() => ProductReportScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductReportScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductReportCountAggregateInput, {nullable:true})
    _count?: ProductReportCountAggregateInput;

    @Field(() => ProductReportMinAggregateInput, {nullable:true})
    _min?: ProductReportMinAggregateInput;

    @Field(() => ProductReportMaxAggregateInput, {nullable:true})
    _max?: ProductReportMaxAggregateInput;
}
