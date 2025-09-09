import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserSessionOrderByCompositeAggregateInput } from '../user-session/user-session-order-by-composite-aggregate.input';
import { SizesOrderByInput } from '../sizes/sizes-order-by.input';
import { ImageOrderByCompositeAggregateInput } from '../image/image-order-by-composite-aggregate.input';
import { AddressOrderByCompositeAggregateInput } from '../address/address-order-by-composite-aggregate.input';
import { UserStripeOrderByInput } from '../user-stripe/user-stripe-order-by.input';
import { AltSignupOrderByInput } from '../alt-signup/alt-signup-order-by.input';
import { EduInstituteOrderByWithRelationInput } from '../edu-institute/edu-institute-order-by-with-relation.input';
import { ShoppingPreferenceOrderByRelationAggregateInput } from '../shopping-preference/shopping-preference-order-by-relation-aggregate.input';
import { HobbyOrderByRelationAggregateInput } from '../hobby/hobby-order-by-relation-aggregate.input';
import { ProductListingOrderByRelationAggregateInput } from '../product-listing/product-listing-order-by-relation-aggregate.input';
import { ProductReportOrderByRelationAggregateInput } from '../product-report/product-report-order-by-relation-aggregate.input';
import { DealOrderByRelationAggregateInput } from '../deal/deal-order-by-relation-aggregate.input';
import { ConversationOrderByRelationAggregateInput } from '../conversation/conversation-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from './user-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

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

    @Field(() => UserSessionOrderByCompositeAggregateInput, {nullable:true})
    sessions?: UserSessionOrderByCompositeAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    referrer?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    gender?: `${SortOrder}`;

    @Field(() => SizesOrderByInput, {nullable:true})
    sizes?: SizesOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    displayPicture?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    personalEmail?: `${SortOrder}`;

    @Field(() => ImageOrderByCompositeAggregateInput, {nullable:true})
    images?: ImageOrderByCompositeAggregateInput;

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

    @Field(() => AddressOrderByCompositeAggregateInput, {nullable:true})
    addressBook?: AddressOrderByCompositeAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    wishlistIds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    savedDealIds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    conversationIds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    dmIds?: `${SortOrder}`;

    @Field(() => UserStripeOrderByInput, {nullable:true})
    stripe?: UserStripeOrderByInput;

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

    @Field(() => AltSignupOrderByInput, {nullable:true})
    altSignup?: AltSignupOrderByInput;

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

    @Field(() => EduInstituteOrderByWithRelationInput, {nullable:true})
    eduInstitute?: EduInstituteOrderByWithRelationInput;

    @Field(() => ShoppingPreferenceOrderByRelationAggregateInput, {nullable:true})
    shoppingPreferences?: ShoppingPreferenceOrderByRelationAggregateInput;

    @Field(() => HobbyOrderByRelationAggregateInput, {nullable:true})
    hobbies?: HobbyOrderByRelationAggregateInput;

    @Field(() => ProductListingOrderByRelationAggregateInput, {nullable:true})
    productListings?: ProductListingOrderByRelationAggregateInput;

    @Field(() => ProductReportOrderByRelationAggregateInput, {nullable:true})
    reportedProducts?: ProductReportOrderByRelationAggregateInput;

    @Field(() => ProductListingOrderByRelationAggregateInput, {nullable:true})
    wishlist?: ProductListingOrderByRelationAggregateInput;

    @Field(() => DealOrderByRelationAggregateInput, {nullable:true})
    savedDeals?: DealOrderByRelationAggregateInput;

    @Field(() => ConversationOrderByRelationAggregateInput, {nullable:true})
    conversations?: ConversationOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    followedBy?: UserOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    following?: UserOrderByRelationAggregateInput;
}
