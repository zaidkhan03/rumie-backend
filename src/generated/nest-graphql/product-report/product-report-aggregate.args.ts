import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductReportWhereInput } from './product-report-where.input';
import { Type } from 'class-transformer';
import { ProductReportOrderByWithRelationInput } from './product-report-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductReportWhereUniqueInput } from './product-report-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductReportCountAggregateInput } from './product-report-count-aggregate.input';
import { ProductReportMinAggregateInput } from './product-report-min-aggregate.input';
import { ProductReportMaxAggregateInput } from './product-report-max-aggregate.input';

@ArgsType()
export class ProductReportAggregateArgs {

    @Field(() => ProductReportWhereInput, {nullable:true})
    @Type(() => ProductReportWhereInput)
    where?: ProductReportWhereInput;

    @Field(() => [ProductReportOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductReportOrderByWithRelationInput>;

    @Field(() => ProductReportWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductReportWhereUniqueInput, 'id'>;

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
