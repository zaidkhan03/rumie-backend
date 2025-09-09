import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdaterolesInput } from './user-updateroles.input';
import { UserSessionCreateInput } from '../user-session/user-session-create.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumGenderFieldUpdateOperationsInput } from '../prisma/nullable-enum-gender-field-update-operations.input';
import { SizesNullableUpdateEnvelopeInput } from '../prisma/sizes-nullable-update-envelope.input';
import { ImageCreateInput } from '../image/image-create.input';
import { UserUpdateshoppingPreferenceIdsInput } from './user-updateshopping-preference-ids.input';
import { UserUpdatehobbyIdsInput } from './user-updatehobby-ids.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AddressCreateInput } from '../address/address-create.input';
import { UserUpdatewishlistIdsInput } from './user-updatewishlist-ids.input';
import { UserUpdatesavedDealIdsInput } from './user-updatesaved-deal-ids.input';
import { UserUpdateconversationIdsInput } from './user-updateconversation-ids.input';
import { UserUpdatedmIdsInput } from './user-updatedm-ids.input';
import { UserStripeNullableUpdateEnvelopeInput } from '../prisma/user-stripe-nullable-update-envelope.input';
import { UserUpdateorderIdsInput } from './user-updateorder-ids.input';
import { UserUpdatefollowedByIDsInput } from './user-updatefollowed-by-i-ds.input';
import { UserUpdatefollowingIDsInput } from './user-updatefollowing-i-ds.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { AltSignupNullableUpdateEnvelopeInput } from '../prisma/alt-signup-nullable-update-envelope.input';
import { NullableEnumPlatformFieldUpdateOperationsInput } from '../prisma/nullable-enum-platform-field-update-operations.input';
import { ShoppingPreferenceUncheckedUpdateManyWithoutUsersNestedInput } from '../shopping-preference/shopping-preference-unchecked-update-many-without-users-nested.input';
import { HobbyUncheckedUpdateManyWithoutUsersNestedInput } from '../hobby/hobby-unchecked-update-many-without-users-nested.input';
import { ProductReportUncheckedUpdateManyWithoutReporterNestedInput } from '../product-report/product-report-unchecked-update-many-without-reporter-nested.input';
import { ProductListingUncheckedUpdateManyWithoutWishlistedByNestedInput } from '../product-listing/product-listing-unchecked-update-many-without-wishlisted-by-nested.input';
import { DealUncheckedUpdateManyWithoutSavedUsersNestedInput } from '../deal/deal-unchecked-update-many-without-saved-users-nested.input';
import { ConversationUncheckedUpdateManyWithoutParticipantsNestedInput } from '../conversation/conversation-unchecked-update-many-without-participants-nested.input';
import { UserUncheckedUpdateManyWithoutFollowingNestedInput } from './user-unchecked-update-many-without-following-nested.input';
import { UserUncheckedUpdateManyWithoutFollowedByNestedInput } from './user-unchecked-update-many-without-followed-by-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutProductListingsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryCode?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    phoneNumberVerified?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdaterolesInput, {nullable:true})
    roles?: UserUpdaterolesInput;

    @Field(() => [UserSessionCreateInput], {nullable:true})
    sessions?: Array<UserSessionCreateInput>;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    referrer?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: NullableEnumGenderFieldUpdateOperationsInput;

    @Field(() => SizesNullableUpdateEnvelopeInput, {nullable:true})
    sizes?: SizesNullableUpdateEnvelopeInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    displayPicture?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    personalEmail?: NullableStringFieldUpdateOperationsInput;

    @Field(() => [ImageCreateInput], {nullable:true})
    images?: Array<ImageCreateInput>;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    eduInstituteId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateshoppingPreferenceIdsInput, {nullable:true})
    shoppingPreferenceIds?: UserUpdateshoppingPreferenceIdsInput;

    @Field(() => UserUpdatehobbyIdsInput, {nullable:true})
    hobbyIds?: UserUpdatehobbyIdsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    about?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => [AddressCreateInput], {nullable:true})
    addressBook?: Array<AddressCreateInput>;

    @Field(() => UserUpdatewishlistIdsInput, {nullable:true})
    wishlistIds?: UserUpdatewishlistIdsInput;

    @Field(() => UserUpdatesavedDealIdsInput, {nullable:true})
    savedDealIds?: UserUpdatesavedDealIdsInput;

    @Field(() => UserUpdateconversationIdsInput, {nullable:true})
    conversationIds?: UserUpdateconversationIdsInput;

    @Field(() => UserUpdatedmIdsInput, {nullable:true})
    dmIds?: UserUpdatedmIdsInput;

    @Field(() => UserStripeNullableUpdateEnvelopeInput, {nullable:true})
    stripe?: UserStripeNullableUpdateEnvelopeInput;

    @Field(() => UserUpdateorderIdsInput, {nullable:true})
    orderIds?: UserUpdateorderIdsInput;

    @Field(() => UserUpdatefollowedByIDsInput, {nullable:true})
    followedByIDs?: UserUpdatefollowedByIDsInput;

    @Field(() => UserUpdatefollowingIDsInput, {nullable:true})
    followingIDs?: UserUpdatefollowingIDsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    legacyId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    blackListed?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    addedManually?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => AltSignupNullableUpdateEnvelopeInput, {nullable:true})
    altSignup?: AltSignupNullableUpdateEnvelopeInput;

    @Field(() => NullableEnumPlatformFieldUpdateOperationsInput, {nullable:true})
    registrationPlatform?: NullableEnumPlatformFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    instagramUsername?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    referralRockCode?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    deactivated?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    signupV?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isParent?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => ShoppingPreferenceUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    shoppingPreferences?: ShoppingPreferenceUncheckedUpdateManyWithoutUsersNestedInput;

    @Field(() => HobbyUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    hobbies?: HobbyUncheckedUpdateManyWithoutUsersNestedInput;

    @Field(() => ProductReportUncheckedUpdateManyWithoutReporterNestedInput, {nullable:true})
    reportedProducts?: ProductReportUncheckedUpdateManyWithoutReporterNestedInput;

    @Field(() => ProductListingUncheckedUpdateManyWithoutWishlistedByNestedInput, {nullable:true})
    wishlist?: ProductListingUncheckedUpdateManyWithoutWishlistedByNestedInput;

    @Field(() => DealUncheckedUpdateManyWithoutSavedUsersNestedInput, {nullable:true})
    savedDeals?: DealUncheckedUpdateManyWithoutSavedUsersNestedInput;

    @Field(() => ConversationUncheckedUpdateManyWithoutParticipantsNestedInput, {nullable:true})
    conversations?: ConversationUncheckedUpdateManyWithoutParticipantsNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutFollowingNestedInput, {nullable:true})
    followedBy?: UserUncheckedUpdateManyWithoutFollowingNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutFollowedByNestedInput, {nullable:true})
    following?: UserUncheckedUpdateManyWithoutFollowedByNestedInput;
}
