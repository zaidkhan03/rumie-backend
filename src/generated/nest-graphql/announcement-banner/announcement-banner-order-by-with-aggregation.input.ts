import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AnnouncementBannerCountOrderByAggregateInput } from './announcement-banner-count-order-by-aggregate.input';
import { AnnouncementBannerMaxOrderByAggregateInput } from './announcement-banner-max-order-by-aggregate.input';
import { AnnouncementBannerMinOrderByAggregateInput } from './announcement-banner-min-order-by-aggregate.input';

@InputType()
export class AnnouncementBannerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    position?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    hasInternalCTA?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    internalCTA?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    image?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => AnnouncementBannerCountOrderByAggregateInput, {nullable:true})
    _count?: AnnouncementBannerCountOrderByAggregateInput;

    @Field(() => AnnouncementBannerMaxOrderByAggregateInput, {nullable:true})
    _max?: AnnouncementBannerMaxOrderByAggregateInput;

    @Field(() => AnnouncementBannerMinOrderByAggregateInput, {nullable:true})
    _min?: AnnouncementBannerMinOrderByAggregateInput;
}
