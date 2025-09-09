import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { FeaturedProductCategory } from '../featured-product-category/featured-product-category.model';
import { ProductCategoryAppFilters } from '../product-category-app-filters/product-category-app-filters.model';
import { PreferredGender } from '../prisma/preferred-gender.enum';
import { ProductListing } from '../product-listing/product-listing.model';
import { ProductCategoryCount } from './product-category-count.output';

@ObjectType()
export class ProductCategory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => String, {nullable:true})
    parentId!: string | null;

    @Field(() => FeaturedProductCategory, {nullable:true})
    featured?: FeaturedProductCategory | null;

    @Field(() => [ProductCategoryAppFilters], {nullable:true})
    filters?: Array<ProductCategoryAppFilters>;

    @Field(() => PreferredGender, {nullable:true})
    preferredGender!: `${PreferredGender}` | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    active!: boolean;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    shippable!: boolean;

    @Field(() => ProductCategory, {nullable:true})
    parent?: ProductCategory | null;

    @Field(() => [ProductCategory], {nullable:true})
    children?: Array<ProductCategory>;

    @Field(() => [ProductListing], {nullable:true})
    productListings?: Array<ProductListing>;

    @Field(() => ProductCategoryCount, {nullable:false})
    _count?: ProductCategoryCount;
}
