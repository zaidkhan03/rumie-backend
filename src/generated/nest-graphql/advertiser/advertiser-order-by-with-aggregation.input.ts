import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdvertiserCountOrderByAggregateInput } from './advertiser-count-order-by-aggregate.input';
import { AdvertiserMaxOrderByAggregateInput } from './advertiser-max-order-by-aggregate.input';
import { AdvertiserMinOrderByAggregateInput } from './advertiser-min-order-by-aggregate.input';

@InputType()
export class AdvertiserOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    companyName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    companyWebsiteUrl?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    logo?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    address1?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    address2?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    city?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    state?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    zip?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => AdvertiserCountOrderByAggregateInput, {nullable:true})
    _count?: AdvertiserCountOrderByAggregateInput;

    @Field(() => AdvertiserMaxOrderByAggregateInput, {nullable:true})
    _max?: AdvertiserMaxOrderByAggregateInput;

    @Field(() => AdvertiserMinOrderByAggregateInput, {nullable:true})
    _min?: AdvertiserMinOrderByAggregateInput;
}
