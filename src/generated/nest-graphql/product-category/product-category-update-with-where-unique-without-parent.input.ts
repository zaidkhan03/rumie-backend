import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCategoryUpdateWithoutParentInput } from './product-category-update-without-parent.input';

@InputType()
export class ProductCategoryUpdateWithWhereUniqueWithoutParentInput {

    @Field(() => ProductCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>;

    @Field(() => ProductCategoryUpdateWithoutParentInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutParentInput)
    data!: ProductCategoryUpdateWithoutParentInput;
}
