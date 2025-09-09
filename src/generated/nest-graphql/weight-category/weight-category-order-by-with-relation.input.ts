import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PackageDimensionsOrderByInput } from '../package-dimensions/package-dimensions-order-by.input';
import { PackageWeightOrderByInput } from '../package-weight/package-weight-order-by.input';
import { ProductListingOrderByRelationAggregateInput } from '../product-listing/product-listing-order-by-relation-aggregate.input';

@InputType()
export class WeightCategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    alias?: `${SortOrder}`;

    @Field(() => PackageDimensionsOrderByInput, {nullable:true})
    packageDimensions?: PackageDimensionsOrderByInput;

    @Field(() => PackageWeightOrderByInput, {nullable:true})
    packageWeight?: PackageWeightOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    shippingFee?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ProductListingOrderByRelationAggregateInput, {nullable:true})
    ProductListing?: ProductListingOrderByRelationAggregateInput;
}
