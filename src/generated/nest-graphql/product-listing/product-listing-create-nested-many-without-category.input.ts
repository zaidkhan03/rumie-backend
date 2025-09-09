import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutCategoryInput } from './product-listing-create-without-category.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutCategoryInput } from './product-listing-create-or-connect-without-category.input';
import { ProductListingCreateManyCategoryInputEnvelope } from './product-listing-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';

@InputType()
export class ProductListingCreateNestedManyWithoutCategoryInput {

    @Field(() => [ProductListingCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductListingCreateWithoutCategoryInput)
    create?: Array<ProductListingCreateWithoutCategoryInput>;

    @Field(() => [ProductListingCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductListingCreateOrConnectWithoutCategoryInput>;

    @Field(() => ProductListingCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductListingCreateManyCategoryInputEnvelope)
    createMany?: ProductListingCreateManyCategoryInputEnvelope;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;
}
