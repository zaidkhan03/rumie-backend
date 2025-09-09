import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductListingCountOrderByAggregateInput } from './product-listing-count-order-by-aggregate.input';
import { ProductListingAvgOrderByAggregateInput } from './product-listing-avg-order-by-aggregate.input';
import { ProductListingMaxOrderByAggregateInput } from './product-listing-max-order-by-aggregate.input';
import { ProductListingMinOrderByAggregateInput } from './product-listing-min-order-by-aggregate.input';
import { ProductListingSumOrderByAggregateInput } from './product-listing-sum-order-by-aggregate.input';

@InputType()
export class ProductListingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    selectedCategoryFilters?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    extendedData?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    brandId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    colorId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productCondition?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productDeliveryMode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingChargePayer?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    weightCategoryId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    uploaderId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    priceString?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    reasonForSelling?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingEnabled?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingFrom?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    soldOut?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    blackListed?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    wishlistedUserIds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    legacyHash?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    archived?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    categoryPreferredGender?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    uploaderEduInstituteId?: `${SortOrder}`;

    @Field(() => ProductListingCountOrderByAggregateInput, {nullable:true})
    _count?: ProductListingCountOrderByAggregateInput;

    @Field(() => ProductListingAvgOrderByAggregateInput, {nullable:true})
    _avg?: ProductListingAvgOrderByAggregateInput;

    @Field(() => ProductListingMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductListingMaxOrderByAggregateInput;

    @Field(() => ProductListingMinOrderByAggregateInput, {nullable:true})
    _min?: ProductListingMinOrderByAggregateInput;

    @Field(() => ProductListingSumOrderByAggregateInput, {nullable:true})
    _sum?: ProductListingSumOrderByAggregateInput;
}
