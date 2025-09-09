import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutCategoryInput } from './product-listing-create-without-category.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutCategoryInput } from './product-listing-create-or-connect-without-category.input';
import { ProductListingUpsertWithWhereUniqueWithoutCategoryInput } from './product-listing-upsert-with-where-unique-without-category.input';
import { ProductListingCreateManyCategoryInputEnvelope } from './product-listing-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { ProductListingUpdateWithWhereUniqueWithoutCategoryInput } from './product-listing-update-with-where-unique-without-category.input';
import { ProductListingUpdateManyWithWhereWithoutCategoryInput } from './product-listing-update-many-with-where-without-category.input';
import { ProductListingScalarWhereInput } from './product-listing-scalar-where.input';

@InputType()
export class ProductListingUpdateManyWithoutCategoryNestedInput {

    @Field(() => [ProductListingCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductListingCreateWithoutCategoryInput)
    create?: Array<ProductListingCreateWithoutCategoryInput>;

    @Field(() => [ProductListingCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductListingCreateOrConnectWithoutCategoryInput>;

    @Field(() => [ProductListingUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProductListingUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<ProductListingUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => ProductListingCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductListingCreateManyCategoryInputEnvelope)
    createMany?: ProductListingCreateManyCategoryInputEnvelope;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ProductListingUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<ProductListingUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [ProductListingUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => ProductListingUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<ProductListingUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [ProductListingScalarWhereInput], {nullable:true})
    @Type(() => ProductListingScalarWhereInput)
    deleteMany?: Array<ProductListingScalarWhereInput>;
}
