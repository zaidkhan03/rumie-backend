import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductReportWhereUniqueInput } from './product-report-where-unique.input';
import { Type } from 'class-transformer';
import { ProductReportCreateInput } from './product-report-create.input';
import { ProductReportUpdateInput } from './product-report-update.input';

@ArgsType()
export class UpsertOneProductReportArgs {

    @Field(() => ProductReportWhereUniqueInput, {nullable:false})
    @Type(() => ProductReportWhereUniqueInput)
    where!: Prisma.AtLeast<ProductReportWhereUniqueInput, 'id'>;

    @Field(() => ProductReportCreateInput, {nullable:false})
    @Type(() => ProductReportCreateInput)
    create!: ProductReportCreateInput;

    @Field(() => ProductReportUpdateInput, {nullable:false})
    @Type(() => ProductReportUpdateInput)
    update!: ProductReportUpdateInput;
}
