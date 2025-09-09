import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryWhereInput } from './product-category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FeaturedProductCategoryNullableCompositeFilter } from '../prisma/featured-product-category-nullable-composite-filter.input';
import { ProductCategoryAppFiltersObjectEqualityInput } from '../prisma/product-category-app-filters-object-equality.input';
import { EnumPreferredGenderNullableFilter } from '../prisma/enum-preferred-gender-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { ProductCategoryNullableRelationFilter } from './product-category-nullable-relation-filter.input';
import { ProductCategoryListRelationFilter } from './product-category-list-relation-filter.input';
import { ProductListingListRelationFilter } from '../product-listing/product-listing-list-relation-filter.input';

@InputType()
export class ProductCategoryWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    AND?: Array<ProductCategoryWhereInput>;

    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    OR?: Array<ProductCategoryWhereInput>;

    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    NOT?: Array<ProductCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parentId?: StringNullableFilter;

    @Field(() => FeaturedProductCategoryNullableCompositeFilter, {nullable:true})
    featured?: FeaturedProductCategoryNullableCompositeFilter;

    @Field(() => [ProductCategoryAppFiltersObjectEqualityInput], {nullable:true})
    filters?: Array<ProductCategoryAppFiltersObjectEqualityInput>;

    @Field(() => EnumPreferredGenderNullableFilter, {nullable:true})
    preferredGender?: EnumPreferredGenderNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    shippable?: BoolFilter;

    @Field(() => ProductCategoryNullableRelationFilter, {nullable:true})
    parent?: ProductCategoryNullableRelationFilter;

    @Field(() => ProductCategoryListRelationFilter, {nullable:true})
    children?: ProductCategoryListRelationFilter;

    @Field(() => ProductListingListRelationFilter, {nullable:true})
    productListings?: ProductListingListRelationFilter;
}
