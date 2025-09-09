import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductReportWhereUniqueInput } from './product-report-where-unique.input';
import { Type } from 'class-transformer';
import { ProductReportUpdateWithoutProductInput } from './product-report-update-without-product.input';

@InputType()
export class ProductReportUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => ProductReportWhereUniqueInput, {nullable:false})
    @Type(() => ProductReportWhereUniqueInput)
    where!: Prisma.AtLeast<ProductReportWhereUniqueInput, 'id'>;

    @Field(() => ProductReportUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductReportUpdateWithoutProductInput)
    data!: ProductReportUpdateWithoutProductInput;
}
