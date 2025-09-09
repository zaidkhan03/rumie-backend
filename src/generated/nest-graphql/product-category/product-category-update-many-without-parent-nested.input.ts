import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutParentInput } from './product-category-create-without-parent.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutParentInput } from './product-category-create-or-connect-without-parent.input';
import { ProductCategoryUpsertWithWhereUniqueWithoutParentInput } from './product-category-upsert-with-where-unique-without-parent.input';
import { ProductCategoryCreateManyParentInputEnvelope } from './product-category-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryUpdateWithWhereUniqueWithoutParentInput } from './product-category-update-with-where-unique-without-parent.input';
import { ProductCategoryUpdateManyWithWhereWithoutParentInput } from './product-category-update-many-with-where-without-parent.input';
import { ProductCategoryScalarWhereInput } from './product-category-scalar-where.input';

@InputType()
export class ProductCategoryUpdateManyWithoutParentNestedInput {

    @Field(() => [ProductCategoryCreateWithoutParentInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutParentInput)
    create?: Array<ProductCategoryCreateWithoutParentInput>;

    @Field(() => [ProductCategoryCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutParentInput>;

    @Field(() => [ProductCategoryUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => ProductCategoryUpsertWithWhereUniqueWithoutParentInput)
    upsert?: Array<ProductCategoryUpsertWithWhereUniqueWithoutParentInput>;

    @Field(() => ProductCategoryCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => ProductCategoryCreateManyParentInputEnvelope)
    createMany?: ProductCategoryCreateManyParentInputEnvelope;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;

    @Field(() => [ProductCategoryUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => ProductCategoryUpdateWithWhereUniqueWithoutParentInput)
    update?: Array<ProductCategoryUpdateWithWhereUniqueWithoutParentInput>;

    @Field(() => [ProductCategoryUpdateManyWithWhereWithoutParentInput], {nullable:true})
    @Type(() => ProductCategoryUpdateManyWithWhereWithoutParentInput)
    updateMany?: Array<ProductCategoryUpdateManyWithWhereWithoutParentInput>;

    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    @Type(() => ProductCategoryScalarWhereInput)
    deleteMany?: Array<ProductCategoryScalarWhereInput>;
}
