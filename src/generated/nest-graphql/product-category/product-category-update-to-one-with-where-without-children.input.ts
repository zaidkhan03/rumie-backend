import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryWhereInput } from './product-category-where.input';
import { Type } from 'class-transformer';
import { ProductCategoryUpdateWithoutChildrenInput } from './product-category-update-without-children.input';

@InputType()
export class ProductCategoryUpdateToOneWithWhereWithoutChildrenInput {

    @Field(() => ProductCategoryWhereInput, {nullable:true})
    @Type(() => ProductCategoryWhereInput)
    where?: ProductCategoryWhereInput;

    @Field(() => ProductCategoryUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => ProductCategoryUpdateWithoutChildrenInput)
    data!: ProductCategoryUpdateWithoutChildrenInput;
}
