import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FeaturedProductCategoryOrderByInput } from '../featured-product-category/featured-product-category-order-by.input';
import { ProductCategoryAppFiltersOrderByCompositeAggregateInput } from '../product-category-app-filters/product-category-app-filters-order-by-composite-aggregate.input';
import { ProductCategoryOrderByRelationAggregateInput } from './product-category-order-by-relation-aggregate.input';
import { ProductListingOrderByRelationAggregateInput } from '../product-listing/product-listing-order-by-relation-aggregate.input';

@InputType()
export class ProductCategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    parentId?: `${SortOrder}`;

    @Field(() => FeaturedProductCategoryOrderByInput, {nullable:true})
    featured?: FeaturedProductCategoryOrderByInput;

    @Field(() => ProductCategoryAppFiltersOrderByCompositeAggregateInput, {nullable:true})
    filters?: ProductCategoryAppFiltersOrderByCompositeAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    preferredGender?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippable?: `${SortOrder}`;

    @Field(() => ProductCategoryOrderByWithRelationInput, {nullable:true})
    parent?: ProductCategoryOrderByWithRelationInput;

    @Field(() => ProductCategoryOrderByRelationAggregateInput, {nullable:true})
    children?: ProductCategoryOrderByRelationAggregateInput;

    @Field(() => ProductListingOrderByRelationAggregateInput, {nullable:true})
    productListings?: ProductListingOrderByRelationAggregateInput;
}
