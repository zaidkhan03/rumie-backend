import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingCreateWithoutCategoryInput } from './product-listing-create-without-category.input';

@InputType()
export class ProductListingCreateOrConnectWithoutCategoryInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductListingCreateWithoutCategoryInput)
    create!: ProductListingCreateWithoutCategoryInput;
}
