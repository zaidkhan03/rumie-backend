import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BannerImageOrderByInput } from '../banner-image/banner-image-order-by.input';
import { BannerImageOrderByCompositeAggregateInput } from '../banner-image/banner-image-order-by-composite-aggregate.input';
import { DateRangeOrderByInput } from '../date-range/date-range-order-by.input';

@InputType()
export class BannerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => BannerImageOrderByInput, {nullable:true})
    image?: BannerImageOrderByInput;

    @Field(() => BannerImageOrderByCompositeAggregateInput, {nullable:true})
    images?: BannerImageOrderByCompositeAggregateInput;

    @Field(() => DateRangeOrderByInput, {nullable:true})
    validity?: DateRangeOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    positions?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
