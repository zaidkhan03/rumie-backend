import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportCreateWithoutProductInput } from './product-report-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductReportCreateOrConnectWithoutProductInput } from './product-report-create-or-connect-without-product.input';
import { ProductReportUpsertWithWhereUniqueWithoutProductInput } from './product-report-upsert-with-where-unique-without-product.input';
import { ProductReportCreateManyProductInputEnvelope } from './product-report-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductReportWhereUniqueInput } from './product-report-where-unique.input';
import { ProductReportUpdateWithWhereUniqueWithoutProductInput } from './product-report-update-with-where-unique-without-product.input';
import { ProductReportUpdateManyWithWhereWithoutProductInput } from './product-report-update-many-with-where-without-product.input';
import { ProductReportScalarWhereInput } from './product-report-scalar-where.input';

@InputType()
export class ProductReportUpdateManyWithoutProductNestedInput {

    @Field(() => [ProductReportCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductReportCreateWithoutProductInput)
    create?: Array<ProductReportCreateWithoutProductInput>;

    @Field(() => [ProductReportCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductReportCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductReportCreateOrConnectWithoutProductInput>;

    @Field(() => [ProductReportUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductReportUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ProductReportUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ProductReportCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductReportCreateManyProductInputEnvelope)
    createMany?: ProductReportCreateManyProductInputEnvelope;

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

    @Field(() => [ProductReportUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductReportUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ProductReportUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ProductReportUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ProductReportUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ProductReportUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ProductReportScalarWhereInput], {nullable:true})
    @Type(() => ProductReportScalarWhereInput)
    deleteMany?: Array<ProductReportScalarWhereInput>;
}
