import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCategoryUpdateWithoutParentInput } from './product-category-update-without-parent.input';
import { ProductCategoryCreateWithoutParentInput } from './product-category-create-without-parent.input';

@InputType()
export class ProductCategoryUpsertWithWhereUniqueWithoutParentInput {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;

    @Field(() => ProductCategoryUpdateWithoutParentInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutParentInput)
    update!: ProductCategoryUpdateWithoutParentInput;

    @Field(() => ProductCategoryCreateWithoutParentInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutParentInput)
    create!: ProductCategoryCreateWithoutParentInput;
}
