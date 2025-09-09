import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportCreateWithoutReporterInput } from './product-report-create-without-reporter.input';
import { Type } from 'class-transformer';
import { ProductReportCreateOrConnectWithoutReporterInput } from './product-report-create-or-connect-without-reporter.input';
import { ProductReportUpsertWithWhereUniqueWithoutReporterInput } from './product-report-upsert-with-where-unique-without-reporter.input';
import { ProductReportCreateManyReporterInputEnvelope } from './product-report-create-many-reporter-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductReportWhereUniqueInput } from './product-report-where-unique.input';
import { ProductReportUpdateWithWhereUniqueWithoutReporterInput } from './product-report-update-with-where-unique-without-reporter.input';
import { ProductReportUpdateManyWithWhereWithoutReporterInput } from './product-report-update-many-with-where-without-reporter.input';
import { ProductReportScalarWhereInput } from './product-report-scalar-where.input';

@InputType()
export class ProductReportUpdateManyWithoutReporterNestedInput {

    @Field(() => [ProductReportCreateWithoutReporterInput], {nullable:true})
    @Type(() => ProductReportCreateWithoutReporterInput)
    create?: Array<ProductReportCreateWithoutReporterInput>;

    @Field(() => [ProductReportCreateOrConnectWithoutReporterInput], {nullable:true})
    @Type(() => ProductReportCreateOrConnectWithoutReporterInput)
    connectOrCreate?: Array<ProductReportCreateOrConnectWithoutReporterInput>;

    @Field(() => [ProductReportUpsertWithWhereUniqueWithoutReporterInput], {nullable:true})
    @Type(() => ProductReportUpsertWithWhereUniqueWithoutReporterInput)
    upsert?: Array<ProductReportUpsertWithWhereUniqueWithoutReporterInput>;

    @Field(() => ProductReportCreateManyReporterInputEnvelope, {nullable:true})
    @Type(() => ProductReportCreateManyReporterInputEnvelope)
    createMany?: ProductReportCreateManyReporterInputEnvelope;

    @Field(() => [ProductReportWhereUniqueInput], {nullable:true})
    @Type(() => ProductReportWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductReportWhereUniqueInput, 'id'>>;

    @Field(() => [ProductReportWhereUniqueInput], {nullable:true})
    @Type(() => ProductReportWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductReportWhereUniqueInput, 'id'>>;

    @Field(() => [ProductReportWhereUniqueInput], {nullable:true})
    @Type(() => ProductReportWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductReportWhereUniqueInput, 'id'>>;

    @Field(() => [ProductReportWhereUniqueInput], {nullable:true})
    @Type(() => ProductReportWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductReportWhereUniqueInput, 'id'>>;

    @Field(() => [ProductReportUpdateWithWhereUniqueWithoutReporterInput], {nullable:true})
    @Type(() => ProductReportUpdateWithWhereUniqueWithoutReporterInput)
    update?: Array<ProductReportUpdateWithWhereUniqueWithoutReporterInput>;

    @Field(() => [ProductReportUpdateManyWithWhereWithoutReporterInput], {nullable:true})
    @Type(() => ProductReportUpdateManyWithWhereWithoutReporterInput)
    updateMany?: Array<ProductReportUpdateManyWithWhereWithoutReporterInput>;

    @Field(() => [ProductReportScalarWhereInput], {nullable:true})
    @Type(() => ProductReportScalarWhereInput)
    deleteMany?: Array<ProductReportScalarWhereInput>;
}
