import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeaturedProductCategoryObjectEqualityInput } from './featured-product-category-object-equality.input';
import { FeaturedProductCategoryWhereInput } from '../featured-product-category/featured-product-category-where.input';

@InputType()
export class FeaturedProductCategoryNullableCompositeFilter {

    @Field(() => FeaturedProductCategoryObjectEqualityInput, {nullable:true})
    equals?: FeaturedProductCategoryObjectEqualityInput;

    @Field(() => FeaturedProductCategoryWhereInput, {nullable:true})
    is?: FeaturedProductCategoryWhereInput;

    @Field(() => FeaturedProductCategoryWhereInput, {nullable:true})
    isNot?: FeaturedProductCategoryWhereInput;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
