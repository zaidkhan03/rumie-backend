import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductListingOrderByRelationAggregateInput } from '../product-listing/product-listing-order-by-relation-aggregate.input';

@InputType()
export class BrandOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    featured?: `${SortOrder}`;

    @Field(() => ProductListingOrderByRelationAggregateInput, {nullable:true})
    ProductListing?: ProductListingOrderByRelationAggregateInput;
}
