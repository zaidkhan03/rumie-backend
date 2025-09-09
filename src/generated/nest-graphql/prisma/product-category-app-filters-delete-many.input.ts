import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryAppFiltersWhereInput } from '../product-category-app-filters/product-category-app-filters-where.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCategoryAppFiltersDeleteManyInput {

    @Field(() => ProductCategoryAppFiltersWhereInput, {nullable:false})
    @Type(() => ProductCategoryAppFiltersWhereInput)
    where!: ProductCategoryAppFiltersWhereInput;
}
