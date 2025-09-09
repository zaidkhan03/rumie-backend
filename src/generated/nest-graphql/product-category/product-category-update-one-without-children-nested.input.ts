import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutChildrenInput } from './product-category-create-without-children.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutChildrenInput } from './product-category-create-or-connect-without-children.input';
import { ProductCategoryUpsertWithoutChildrenInput } from './product-category-upsert-without-children.input';
import { ProductCategoryWhereInput } from './product-category-where.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { ProductCategoryUpdateToOneWithWhereWithoutChildrenInput } from './product-category-update-to-one-with-where-without-children.input';

@InputType()
export class ProductCategoryUpdateOneWithoutChildrenNestedInput {

    @Field(() => ProductCategoryCreateWithoutChildrenInput, {nullable:true})
    @Type(() => ProductCategoryCreateWithoutChildrenInput)
    create?: ProductCategoryCreateWithoutChildrenInput;

    @Field(() => ProductCategoryCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutChildrenInput;

    @Field(() => ProductCategoryUpsertWithoutChildrenInput, {nullable:true})
    @Type(() => ProductCategoryUpsertWithoutChildrenInput)
    upsert?: ProductCategoryUpsertWithoutChildrenInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    delete?: ProductCategoryWhereInput;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;

    @Field(() => ProductCategoryUpdateToOneWithWhereWithoutChildrenInput, {nullable:true})
    @Type(() => ProductCategoryUpdateToOneWithWhereWithoutChildrenInput)
    update?: ProductCategoryUpdateToOneWithWhereWithoutChildrenInput;
}
