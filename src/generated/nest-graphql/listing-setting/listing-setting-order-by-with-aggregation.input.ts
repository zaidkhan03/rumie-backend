import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ListingSettingCountOrderByAggregateInput } from './listing-setting-count-order-by-aggregate.input';
import { ListingSettingAvgOrderByAggregateInput } from './listing-setting-avg-order-by-aggregate.input';
import { ListingSettingMaxOrderByAggregateInput } from './listing-setting-max-order-by-aggregate.input';
import { ListingSettingMinOrderByAggregateInput } from './listing-setting-min-order-by-aggregate.input';
import { ListingSettingSumOrderByAggregateInput } from './listing-setting-sum-order-by-aggregate.input';

@InputType()
export class ListingSettingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    enableSelling?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    enableRenting?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    reasonsForSelling?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    meetupPreferences?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productDeliveryModes?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    sellerFees?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    taxes?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    creditProcessing?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ListingSettingCountOrderByAggregateInput, {nullable:true})
    _count?: ListingSettingCountOrderByAggregateInput;

    @Field(() => ListingSettingAvgOrderByAggregateInput, {nullable:true})
    _avg?: ListingSettingAvgOrderByAggregateInput;

    @Field(() => ListingSettingMaxOrderByAggregateInput, {nullable:true})
    _max?: ListingSettingMaxOrderByAggregateInput;

    @Field(() => ListingSettingMinOrderByAggregateInput, {nullable:true})
    _min?: ListingSettingMinOrderByAggregateInput;

    @Field(() => ListingSettingSumOrderByAggregateInput, {nullable:true})
    _sum?: ListingSettingSumOrderByAggregateInput;
}
