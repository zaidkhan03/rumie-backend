import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeaturedProductCategoryCreateInput } from '../featured-product-category/featured-product-category-create.input';
import { Type } from 'class-transformer';

@InputType()
export class FeaturedProductCategoryNullableCreateEnvelopeInput {

    @Field(() => FeaturedProductCategoryCreateInput, {nullable:true})
    @Type(() => FeaturedProductCategoryCreateInput)
    set?: FeaturedProductCategoryCreateInput;
}
