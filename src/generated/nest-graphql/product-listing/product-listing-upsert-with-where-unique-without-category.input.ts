import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingUpdateWithoutCategoryInput } from './product-listing-update-without-category.input';
import { ProductListingCreateWithoutCategoryInput } from './product-listing-create-without-category.input';

@InputType()
export class ProductListingUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductListingUpdateWithoutCategoryInput)
    update!: ProductListingUpdateWithoutCategoryInput;

    @Field(() => ProductListingCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductListingCreateWithoutCategoryInput)
    create!: ProductListingCreateWithoutCategoryInput;
}
