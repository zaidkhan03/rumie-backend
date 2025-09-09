import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryAppFiltersCreateInput } from '../product-category-app-filters/product-category-app-filters-create.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCategoryAppFiltersListCreateEnvelopeInput {

    @Field(() => [ProductCategoryAppFiltersCreateInput], {nullable:true})
    @Type(() => ProductCategoryAppFiltersCreateInput)
    set?: Array<ProductCategoryAppFiltersCreateInput>;
}
