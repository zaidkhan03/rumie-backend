import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreaterolesInput } from './user-createroles.input';
import { UserSessionCreateInput } from '../user-session/user-session-create.input';
import { Gender } from '../prisma/gender.enum';
import { SizesNullableCreateEnvelopeInput } from '../prisma/sizes-nullable-create-envelope.input';
import { ImageCreateInput } from '../image/image-create.input';
import { UserCreateshoppingPreferenceIdsInput } from './user-createshopping-preference-ids.input';
import { UserCreatehobbyIdsInput } from './user-createhobby-ids.input';
import { AddressCreateInput } from '../address/address-create.input';
import { UserCreatewishlistIdsInput } from './user-createwishlist-ids.input';
import { UserCreatesavedDealIdsInput } from './user-createsaved-deal-ids.input';
import { UserCreateconversationIdsInput } from './user-createconversation-ids.input';
import { UserCreatedmIdsInput } from './user-createdm-ids.input';
import { UserStripeNullableCreateEnvelopeInput } from '../prisma/user-stripe-nullable-create-envelope.input';
import { UserCreateorderIdsInput } from './user-createorder-ids.input';
import { UserCreatefollowedByIDsInput } from './user-createfollowed-by-i-ds.input';
import { UserCreatefollowingIDsInput } from './user-createfollowing-i-ds.input';
import { AltSignupNullableCreateEnvelopeInput } from '../prisma/alt-signup-nullable-create-envelope.input';
import { Platform } from '../prisma/platform.enum';
import { ShoppingPreferenceUncheckedCreateNestedManyWithoutUsersInput } from '../shopping-preference/shopping-preference-unchecked-create-nested-many-without-users.input';
import { HobbyUncheckedCreateNestedManyWithoutUsersInput } from '../hobby/hobby-unchecked-create-nested-many-without-users.input';
import { ProductListingUncheckedCreateNestedManyWithoutUploaderInput } from '../product-listing/product-listing-unchecked-create-nested-many-without-uploader.input';
import { ProductReportUncheckedCreateNestedManyWithoutReporterInput } from '../product-report/product-report-unchecked-create-nested-many-without-reporter.input';
import { ProductListingUncheckedCreateNestedManyWithoutWishlistedByInput } from '../product-listing/product-listing-unchecked-create-nested-many-without-wishlisted-by.input';
import { DealUncheckedCreateNestedManyWithoutSavedUsersInput } from '../deal/deal-unchecked-create-nested-many-without-saved-users.input';
import { ConversationUncheckedCreateNestedManyWithoutParticipantsInput } from '../conversation/conversation-unchecked-create-nested-many-without-participants.input';
import { UserUncheckedCreateNestedManyWithoutFollowingInput } from './user-unchecked-create-nested-many-without-following.input';
import { UserUncheckedCreateNestedManyWithoutFollowedByInput } from './user-unchecked-create-nested-many-without-followed-by.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    countryCode!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => Boolean, {nullable:true})
    phoneNumberVerified?: boolean;

    @Field(() => UserCreaterolesInput, {nullable:true})
    roles?: UserCreaterolesInput;

    @Field(() => [UserSessionCreateInput], {nullable:true})
    sessions?: Array<UserSessionCreateInput>;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    referrer?: string;

    @Field(() => Gender, {nullable:true})
    gender?: `${Gender}`;

    @Field(() => SizesNullableCreateEnvelopeInput, {nullable:true})
    sizes?: SizesNullableCreateEnvelopeInput;

    @Field(() => String, {nullable:true})
    displayPicture?: string;

    @Field(() => String, {nullable:true})
    personalEmail?: string;

    @Field(() => [ImageCreateInput], {nullable:true})
    images?: Array<ImageCreateInput>;

    @Field(() => String, {nullable:true})
    eduInstituteId?: string;

    @Field(() => UserCreateshoppingPreferenceIdsInput, {nullable:true})
    shoppingPreferenceIds?: UserCreateshoppingPreferenceIdsInput;

    @Field(() => UserCreatehobbyIdsInput, {nullable:true})
    hobbyIds?: UserCreatehobbyIdsInput;

    @Field(() => String, {nullable:true})
    about?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => [AddressCreateInput], {nullable:true})
    addressBook?: Array<AddressCreateInput>;

    @Field(() => UserCreatewishlistIdsInput, {nullable:true})
    wishlistIds?: UserCreatewishlistIdsInput;

    @Field(() => UserCreatesavedDealIdsInput, {nullable:true})
    savedDealIds?: UserCreatesavedDealIdsInput;

    @Field(() => UserCreateconversationIdsInput, {nullable:true})
    conversationIds?: UserCreateconversationIdsInput;

    @Field(() => UserCreatedmIdsInput, {nullable:true})
    dmIds?: UserCreatedmIdsInput;

    @Field(() => UserStripeNullableCreateEnvelopeInput, {nullable:true})
    stripe?: UserStripeNullableCreateEnvelopeInput;

    @Field(() => UserCreateorderIdsInput, {nullable:true})
    orderIds?: UserCreateorderIdsInput;

    @Field(() => UserCreatefollowedByIDsInput, {nullable:true})
    followedByIDs?: UserCreatefollowedByIDsInput;

    @Field(() => UserCreatefollowingIDsInput, {nullable:true})
    followingIDs?: UserCreatefollowingIDsInput;

    @Field(() => String, {nullable:true})
    legacyId?: string;

    @Field(() => Boolean, {nullable:true})
    blackListed?: boolean;

    @Field(() => Boolean, {nullable:true})
    addedManually?: boolean;

    @Field(() => AltSignupNullableCreateEnvelopeInput, {nullable:true})
    altSignup?: AltSignupNullableCreateEnvelopeInput;

    @Field(() => Platform, {nullable:true})
    registrationPlatform?: `${Platform}`;

    @Field(() => String, {nullable:true})
    instagramUsername?: string;

    @Field(() => String, {nullable:true})
    referralRockCode?: string;

    @Field(() => Boolean, {nullable:true})
    deactivated?: boolean;

    @Field(() => String, {nullable:true})
    signupV?: string;

    @Field(() => Boolean, {nullable:true})
    isParent?: boolean;

    @Field(() => ShoppingPreferenceUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    shoppingPreferences?: ShoppingPreferenceUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => HobbyUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    hobbies?: HobbyUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => ProductListingUncheckedCreateNestedManyWithoutUploaderInput, {nullable:true})
    productListings?: ProductListingUncheckedCreateNestedManyWithoutUploaderInput;

    @Field(() => ProductReportUncheckedCreateNestedManyWithoutReporterInput, {nullable:true})
    reportedProducts?: ProductReportUncheckedCreateNestedManyWithoutReporterInput;

    @Field(() => ProductListingUncheckedCreateNestedManyWithoutWishlistedByInput, {nullable:true})
    wishlist?: ProductListingUncheckedCreateNestedManyWithoutWishlistedByInput;

    @Field(() => DealUncheckedCreateNestedManyWithoutSavedUsersInput, {nullable:true})
    savedDeals?: DealUncheckedCreateNestedManyWithoutSavedUsersInput;

    @Field(() => ConversationUncheckedCreateNestedManyWithoutParticipantsInput, {nullable:true})
    conversations?: ConversationUncheckedCreateNestedManyWithoutParticipantsInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutFollowingInput, {nullable:true})
    followedBy?: UserUncheckedCreateNestedManyWithoutFollowingInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutFollowedByInput, {nullable:true})
    following?: UserUncheckedCreateNestedManyWithoutFollowedByInput;
}
