import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductReportUpdateInput } from './product-report-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductReportWhereUniqueInput } from './product-report-where-unique.input';

@ArgsType()
export class UpdateOneProductReportArgs {

    @Field(() => ProductReportUpdateInput, {nullable:false})
    @Type(() => ProductReportUpdateInput)
    data!: ProductReportUpdateInput;

    @Field(() => ProductReportWhereUniqueInput, {nullable:false})
    @Type(() => ProductReportWhereUniqueInput)
    where!: Prisma.AtLeast<ProductReportWhereUniqueInput, 'id'>;
}
