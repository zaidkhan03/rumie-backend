import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingType } from './product-listing-type.enum';
import { NestedEnumProductListingTypeFilter } from './nested-enum-product-listing-type-filter.input';

@InputType()
export class EnumProductListingTypeFilter {

    @Field(() => ProductListingType, {nullable:true})
    equals?: `${ProductListingType}`;

    @Field(() => [ProductListingType], {nullable:true})
    in?: Array<`${ProductListingType}`>;

    @Field(() => [ProductListingType], {nullable:true})
    notIn?: Array<`${ProductListingType}`>;

    @Field(() => NestedEnumProductListingTypeFilter, {nullable:true})
    not?: NestedEnumProductListingTypeFilter;
}
