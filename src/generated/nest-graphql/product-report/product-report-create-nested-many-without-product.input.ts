import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductReportCreateWithoutProductInput } from './product-report-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductReportCreateOrConnectWithoutProductInput } from './product-report-create-or-connect-without-product.input';
import { ProductReportCreateManyProductInputEnvelope } from './product-report-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductReportWhereUniqueInput } from './product-report-where-unique.input';

@InputType()
export class ProductReportCreateNestedManyWithoutProductInput {

    @Field(() => [ProductReportCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductReportCreateWithoutProductInput)
    create?: Array<ProductReportCreateWithoutProductInput>;

    @Field(() => [ProductReportCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductReportCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductReportCreateOrConnectWithoutProductInput>;

    @Field(() => ProductReportCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductReportCreateManyProductInputEnvelope)
    createMany?: ProductReportCreateManyProductInputEnvelope;

    @Field(() => [ProductReportWhereUniqueInput], {nullable:true})
    @Type(() => ProductReportWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductReportWhereUniqueInput, 'id'>>;
}
