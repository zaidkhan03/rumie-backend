import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryUpdateWithoutChildrenInput } from './product-category-update-without-children.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateWithoutChildrenInput } from './product-category-create-without-children.input';
import { ProductCategoryWhereInput } from './product-category-where.input';

@InputType()
export class ProductCategoryUpsertWithoutChildrenInput {

    @Field(() => ProductCategoryUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutChildrenInput)
    update!: ProductCategoryUpdateWithoutChildrenInput;

    @Field(() => ProductCategoryCreateWithoutChildrenInput, {nullable:false})
    @Type(() => ProductCategoryCreateWithoutChildrenInput)
    create!: ProductCategoryCreateWithoutChildrenInput;

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: ProductCategoryWhereInput;
}
