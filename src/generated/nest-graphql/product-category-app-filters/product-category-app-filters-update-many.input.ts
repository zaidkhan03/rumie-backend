import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryAppFiltersWhereInput } from './product-category-app-filters-where.input';
import { Type } from 'class-transformer';
import { ProductCategoryAppFiltersUpdateInput } from './product-category-app-filters-update.input';

@InputType()
export class ProductCategoryAppFiltersUpdateManyInput {

    @Field(() => ProductCategoryAppFiltersWhereInput, {nullable:false})
    @Type(() => ProductCategoryAppFiltersWhereInput)
    where!: ProductCategoryAppFiltersWhereInput;

    @Field(() => ProductCategoryAppFiltersUpdateInput, {nullable:false})
    @Type(() => ProductCategoryAppFiltersUpdateInput)
    data!: ProductCategoryAppFiltersUpdateInput;
}
