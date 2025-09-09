import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeaturedProductCategoryCreateInput } from '../featured-product-category/featured-product-category-create.input';
import { Type } from 'class-transformer';
import { FeaturedProductCategoryUpsertInput } from './featured-product-category-upsert.input';

@InputType()
export class FeaturedProductCategoryNullableUpdateEnvelopeInput {

    @Field(() => FeaturedProductCategoryCreateInput, {nullable:true})
    @Type(() => FeaturedProductCategoryCreateInput)
    set?: FeaturedProductCategoryCreateInput;

    @Field(() => FeaturedProductCategoryUpsertInput, {nullable:true})
    @Type(() => FeaturedProductCategoryUpsertInput)
    upsert?: FeaturedProductCategoryUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
