import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryAppFiltersObjectEqualityInput } from './product-category-app-filters-object-equality.input';
import { ProductCategoryAppFiltersWhereInput } from '../product-category-app-filters/product-category-app-filters-where.input';

@InputType()
export class ProductCategoryAppFiltersCompositeListFilter {

    @Field(() => [ProductCategoryAppFiltersObjectEqualityInput], {nullable:true})
    equals?: Array<ProductCategoryAppFiltersObjectEqualityInput>;

    @Field(() => ProductCategoryAppFiltersWhereInput, {nullable:true})
    every?: ProductCategoryAppFiltersWhereInput;

    @Field(() => ProductCategoryAppFiltersWhereInput, {nullable:true})
    some?: ProductCategoryAppFiltersWhereInput;

    @Field(() => ProductCategoryAppFiltersWhereInput, {nullable:true})
    none?: ProductCategoryAppFiltersWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
