import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportCreateWithoutReporterInput } from './product-report-create-without-reporter.input';
import { Type } from 'class-transformer';
import { ProductReportCreateOrConnectWithoutReporterInput } from './product-report-create-or-connect-without-reporter.input';
import { ProductReportCreateManyReporterInputEnvelope } from './product-report-create-many-reporter-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductReportWhereUniqueInput } from './product-report-where-unique.input';

@InputType()
export class ProductReportCreateNestedManyWithoutReporterInput {

    @Field(() => [ProductReportCreateWithoutReporterInput], {nullable:true})
    @Type(() => ProductReportCreateWithoutReporterInput)
    create?: Array<ProductReportCreateWithoutReporterInput>;

    @Field(() => [ProductReportCreateOrConnectWithoutReporterInput], {nullable:true})
    @Type(() => ProductReportCreateOrConnectWithoutReporterInput)
    connectOrCreate?: Array<ProductReportCreateOrConnectWithoutReporterInput>;

    @Field(() => ProductReportCreateManyReporterInputEnvelope, {nullable:true})
    @Type(() => ProductReportCreateManyReporterInputEnvelope)
    createMany?: ProductReportCreateManyReporterInputEnvelope;

    @Field(() => [ProductReportWhereUniqueInput], {nullable:true})
    @Type(() => ProductReportWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductReportWhereUniqueInput, 'id'>>;
}
