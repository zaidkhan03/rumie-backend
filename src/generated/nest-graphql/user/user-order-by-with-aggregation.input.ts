import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserCountOrderByAggregateInput } from './user-count-order-by-aggregate.input';
import { UserMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input';
import { UserMinOrderByAggregateInput } from './user-min-order-by-aggregate.input';

@InputType()
export class UserOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    firstName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    lastName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    countryCode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phoneNumberVerified?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    roles?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    referrer?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    gender?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    displayPicture?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    personalEmail?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    eduInstituteId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shoppingPreferenceIds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    hobbyIds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    about?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    wishlistIds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    savedDealIds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    conversationIds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    dmIds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    orderIds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    followedByIDs?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    followingIDs?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    legacyId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    blackListed?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    addedManually?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    registrationPlatform?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    instagramUsername?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    referralRockCode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    deactivated?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    signupV?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isParent?: `${SortOrder}`;

    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: UserCountOrderByAggregateInput;

    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: UserMaxOrderByAggregateInput;

    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: UserMinOrderByAggregateInput;
}
