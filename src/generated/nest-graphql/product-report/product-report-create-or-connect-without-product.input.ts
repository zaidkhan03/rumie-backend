import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductReportWhereUniqueInput } from './product-report-where-unique.input';
import { Type } from 'class-transformer';
import { ProductReportCreateWithoutProductInput } from './product-report-create-without-product.input';

@InputType()
export class ProductReportCreateOrConnectWithoutProductInput {

    @Field(() => ProductReportWhereUniqueInput, {nullable:false})
    @Type(() => ProductReportWhereUniqueInput)
    where!: Prisma.AtLeast<ProductReportWhereUniqueInput, 'id'>;

    @Field(() => ProductReportCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductReportCreateWithoutProductInput)
    create!: ProductReportCreateWithoutProductInput;
}
