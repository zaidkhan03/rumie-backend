import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingCreateWithoutReportsInput } from './product-listing-create-without-reports.input';

@InputType()
export class ProductListingCreateOrConnectWithoutReportsInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingCreateWithoutReportsInput, {nullable:false})
    @Type(() => ProductListingCreateWithoutReportsInput)
    create!: ProductListingCreateWithoutReportsInput;
}
