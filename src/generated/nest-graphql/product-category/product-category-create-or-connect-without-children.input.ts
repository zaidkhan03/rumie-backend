import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateWithoutChildrenInput } from './product-category-create-without-children.input';

@InputType()
export class ProductCategoryCreateOrConnectWithoutChildrenInput {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;

    @Field(() => ProductCategoryCreateWithoutChildrenInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutChildrenInput)
    create!: ProductCategoryCreateWithoutChildrenInput;
}
