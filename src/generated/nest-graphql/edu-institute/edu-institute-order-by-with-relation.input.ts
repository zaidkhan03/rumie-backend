import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { CampusChatOrderByRelationAggregateInput } from '../campus-chat/campus-chat-order-by-relation-aggregate.input';
import { ProductListingOrderByRelationAggregateInput } from '../product-listing/product-listing-order-by-relation-aggregate.input';

@InputType()
export class EduInstituteOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    domain?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    logo?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    city?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    state?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    address?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    zip?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    location?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    passCode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isRegistered?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    students?: UserOrderByRelationAggregateInput;

    @Field(() => CampusChatOrderByRelationAggregateInput, {nullable:true})
    campusChats?: CampusChatOrderByRelationAggregateInput;

    @Field(() => ProductListingOrderByRelationAggregateInput, {nullable:true})
    productListings?: ProductListingOrderByRelationAggregateInput;
}
