import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryAppFiltersCreateInput } from '../product-category-app-filters/product-category-app-filters-create.input';
import { Type } from 'class-transformer';
import { ProductCategoryAppFiltersUpdateManyInput } from '../product-category-app-filters/product-category-app-filters-update-many.input';
import { ProductCategoryAppFiltersDeleteManyInput } from './product-category-app-filters-delete-many.input';

@InputType()
export class ProductCategoryAppFiltersListUpdateEnvelopeInput {

    @Field(() => [ProductCategoryAppFiltersCreateInput], {nullable:true})
    @Type(() => ProductCategoryAppFiltersCreateInput)
    set?: Array<ProductCategoryAppFiltersCreateInput>;

    @Field(() => [ProductCategoryAppFiltersCreateInput], {nullable:true})
    push?: Array<ProductCategoryAppFiltersCreateInput>;

    @Field(() => ProductCategoryAppFiltersUpdateManyInput, {nullable:true})
    @Type(() => ProductCategoryAppFiltersUpdateManyInput)
    updateMany?: ProductCategoryAppFiltersUpdateManyInput;

    @Field(() => ProductCategoryAppFiltersDeleteManyInput, {nullable:true})
    @Type(() => ProductCategoryAppFiltersDeleteManyInput)
    deleteMany?: ProductCategoryAppFiltersDeleteManyInput;
}
