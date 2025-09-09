import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingUpdateWithoutWeightCategoryInput } from './product-listing-update-without-weight-category.input';
import { ProductListingCreateWithoutWeightCategoryInput } from './product-listing-create-without-weight-category.input';

@InputType()
export class ProductListingUpsertWithWhereUniqueWithoutWeightCategoryInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingUpdateWithoutWeightCategoryInput, {nullable:false})
    @Type(() => ProductListingUpdateWithoutWeightCategoryInput)
    update!: ProductListingUpdateWithoutWeightCategoryInput;

    @Field(() => ProductListingCreateWithoutWeightCategoryInput, {nullable:false})
    @Type(() => ProductListingCreateWithoutWeightCategoryInput)
    create!: ProductListingCreateWithoutWeightCategoryInput;
}
