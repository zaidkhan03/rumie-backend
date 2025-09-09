import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductReportWhereInput } from './product-report-where.input';
import { Type } from 'class-transformer';
import { ProductReportOrderByWithRelationInput } from './product-report-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductReportWhereUniqueInput } from './product-report-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductReportScalarFieldEnum } from './product-report-scalar-field.enum';

@ArgsType()
export class FindFirstProductReportArgs {

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

    @Field(() => [ProductReportScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProductReportScalarFieldEnum}`>;
}
