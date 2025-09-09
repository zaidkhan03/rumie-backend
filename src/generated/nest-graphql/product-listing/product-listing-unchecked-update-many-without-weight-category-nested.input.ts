import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutWeightCategoryInput } from './product-listing-create-without-weight-category.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutWeightCategoryInput } from './product-listing-create-or-connect-without-weight-category.input';
import { ProductListingUpsertWithWhereUniqueWithoutWeightCategoryInput } from './product-listing-upsert-with-where-unique-without-weight-category.input';
import { ProductListingCreateManyWeightCategoryInputEnvelope } from './product-listing-create-many-weight-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { ProductListingUpdateWithWhereUniqueWithoutWeightCategoryInput } from './product-listing-update-with-where-unique-without-weight-category.input';
import { ProductListingUpdateManyWithWhereWithoutWeightCategoryInput } from './product-listing-update-many-with-where-without-weight-category.input';
import { ProductListingScalarWhereInput } from './product-listing-scalar-where.input';

@InputType()
export class ProductListingUncheckedUpdateManyWithoutWeightCategoryNestedInput {

    @Field(() => [ProductListingCreateWithoutWeightCategoryInput], {nullable:true})
    @Type(() => ProductListingCreateWithoutWeightCategoryInput)
    create?: Array<ProductListingCreateWithoutWeightCategoryInput>;

    @Field(() => [ProductListingCreateOrConnectWithoutWeightCategoryInput], {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutWeightCategoryInput)
    connectOrCreate?: Array<ProductListingCreateOrConnectWithoutWeightCategoryInput>;

    @Field(() => [ProductListingUpsertWithWhereUniqueWithoutWeightCategoryInput], {nullable:true})
    @Type(() => ProductListingUpsertWithWhereUniqueWithoutWeightCategoryInput)
    upsert?: Array<ProductListingUpsertWithWhereUniqueWithoutWeightCategoryInput>;

    @Field(() => ProductListingCreateManyWeightCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductListingCreateManyWeightCategoryInputEnvelope)
    createMany?: ProductListingCreateManyWeightCategoryInputEnvelope;

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

    @Field(() => [ProductListingUpdateWithWhereUniqueWithoutWeightCategoryInput], {nullable:true})
    @Type(() => ProductListingUpdateWithWhereUniqueWithoutWeightCategoryInput)
    update?: Array<ProductListingUpdateWithWhereUniqueWithoutWeightCategoryInput>;

    @Field(() => [ProductListingUpdateManyWithWhereWithoutWeightCategoryInput], {nullable:true})
    @Type(() => ProductListingUpdateManyWithWhereWithoutWeightCategoryInput)
    updateMany?: Array<ProductListingUpdateManyWithWhereWithoutWeightCategoryInput>;

    @Field(() => [ProductListingScalarWhereInput], {nullable:true})
    @Type(() => ProductListingScalarWhereInput)
    deleteMany?: Array<ProductListingScalarWhereInput>;
}
