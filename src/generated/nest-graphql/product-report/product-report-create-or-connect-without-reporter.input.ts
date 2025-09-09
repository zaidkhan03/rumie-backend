import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductReportWhereUniqueInput } from './product-report-where-unique.input';
import { Type } from 'class-transformer';
import { ProductReportCreateWithoutReporterInput } from './product-report-create-without-reporter.input';

@InputType()
export class ProductReportCreateOrConnectWithoutReporterInput {

    @Field(() => ProductReportWhereUniqueInput, {nullable:false})
    @Type(() => ProductReportWhereUniqueInput)
    where!: Prisma.AtLeast<ProductReportWhereUniqueInput, 'id'>;

    @Field(() => ProductReportCreateWithoutReporterInput, {nullable:false})
    @Type(() => ProductReportCreateWithoutReporterInput)
    create!: ProductReportCreateWithoutReporterInput;
}
