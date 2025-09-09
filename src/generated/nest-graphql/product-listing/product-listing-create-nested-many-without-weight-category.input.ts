import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutWeightCategoryInput } from './product-listing-create-without-weight-category.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutWeightCategoryInput } from './product-listing-create-or-connect-without-weight-category.input';
import { ProductListingCreateManyWeightCategoryInputEnvelope } from './product-listing-create-many-weight-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';

@InputType()
export class ProductListingCreateNestedManyWithoutWeightCategoryInput {

    @Field(() => [ProductListingCreateWithoutWeightCategoryInput], {nullable:true})
    @Type(() => ProductListingCreateWithoutWeightCategoryInput)
    create?: Array<ProductListingCreateWithoutWeightCategoryInput>;

    @Field(() => [ProductListingCreateOrConnectWithoutWeightCategoryInput], {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutWeightCategoryInput)
    connectOrCreate?: Array<ProductListingCreateOrConnectWithoutWeightCategoryInput>;

    @Field(() => ProductListingCreateManyWeightCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductListingCreateManyWeightCategoryInputEnvelope)
    createMany?: ProductListingCreateManyWeightCategoryInputEnvelope;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;
}
