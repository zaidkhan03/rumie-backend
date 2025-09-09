import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductReportWhereUniqueInput } from './product-report-where-unique.input';
import { Type } from 'class-transformer';
import { ProductReportUpdateWithoutReporterInput } from './product-report-update-without-reporter.input';

@InputType()
export class ProductReportUpdateWithWhereUniqueWithoutReporterInput {

    @Field(() => ProductReportWhereUniqueInput, {nullable:false})
    @Type(() => ProductReportWhereUniqueInput)
    where!: Prisma.AtLeast<ProductReportWhereUniqueInput, 'id'>;

    @Field(() => ProductReportUpdateWithoutReporterInput, {nullable:false})
    @Type(() => ProductReportUpdateWithoutReporterInput)
    data!: ProductReportUpdateWithoutReporterInput;
}
