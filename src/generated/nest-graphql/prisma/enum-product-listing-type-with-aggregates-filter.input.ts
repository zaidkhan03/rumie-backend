import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingType } from './product-listing-type.enum';
import { NestedEnumProductListingTypeWithAggregatesFilter } from './nested-enum-product-listing-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumProductListingTypeFilter } from './nested-enum-product-listing-type-filter.input';

@InputType()
export class EnumProductListingTypeWithAggregatesFilter {

    @Field(() => ProductListingType, {nullable:true})
    equals?: `${ProductListingType}`;

    @Field(() => [ProductListingType], {nullable:true})
    in?: Array<`${ProductListingType}`>;

    @Field(() => [ProductListingType], {nullable:true})
    notIn?: Array<`${ProductListingType}`>;

    @Field(() => NestedEnumProductListingTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumProductListingTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumProductListingTypeFilter, {nullable:true})
    _min?: NestedEnumProductListingTypeFilter;

    @Field(() => NestedEnumProductListingTypeFilter, {nullable:true})
    _max?: NestedEnumProductListingTypeFilter;
}
