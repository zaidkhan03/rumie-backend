import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutChildrenInput } from './product-category-create-without-children.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutChildrenInput } from './product-category-create-or-connect-without-children.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';

@InputType()
export class ProductCategoryCreateNestedOneWithoutChildrenInput {

    @Field(() => ProductCategoryCreateWithoutChildrenInput, {nullable:true})
    @Type(() => ProductCategoryCreateWithoutChildrenInput)
    create?: ProductCategoryCreateWithoutChildrenInput;

    @Field(() => ProductCategoryCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutChildrenInput;

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;
}
