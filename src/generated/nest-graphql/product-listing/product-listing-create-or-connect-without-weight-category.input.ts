import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingCreateWithoutWeightCategoryInput } from './product-listing-create-without-weight-category.input';

@InputType()
export class ProductListingCreateOrConnectWithoutWeightCategoryInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingCreateWithoutWeightCategoryInput, {nullable:false})
    @Type(() => ProductListingCreateWithoutWeightCategoryInput)
    create!: ProductListingCreateWithoutWeightCategoryInput;
}
