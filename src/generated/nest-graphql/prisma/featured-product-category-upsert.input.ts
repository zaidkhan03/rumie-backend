import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeaturedProductCategoryCreateInput } from '../featured-product-category/featured-product-category-create.input';
import { Type } from 'class-transformer';
import { FeaturedProductCategoryUpdateInput } from '../featured-product-category/featured-product-category-update.input';

@InputType()
export class FeaturedProductCategoryUpsertInput {

    @Field(() => FeaturedProductCategoryCreateInput, {nullable:false})
    @Type(() => FeaturedProductCategoryCreateInput)
    set!: FeaturedProductCategoryCreateInput;

    @Field(() => FeaturedProductCategoryUpdateInput, {nullable:false})
    @Type(() => FeaturedProductCategoryUpdateInput)
    update!: FeaturedProductCategoryUpdateInput;
}
