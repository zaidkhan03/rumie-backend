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
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AddressCreateInput } from '../address/address-create.input';
import { UserUpdatedmIdsInput } from './user-updatedm-ids.input';
import { UserStripeNullableUpdateEnvelopeInput } from '../prisma/user-stripe-nullable-update-envelope.input';
import { UserUpdateorderIdsInput } from './user-updateorder-ids.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { AltSignupNullableUpdateEnvelopeInput } from '../prisma/alt-signup-nullable-update-envelope.input';
import { NullableEnumPlatformFieldUpdateOperationsInput } from '../prisma/nullable-enum-platform-field-update-operations.input';
import { EduInstituteUpdateOneWithoutStudentsNestedInput } from '../edu-institute/edu-institute-update-one-without-students-nested.input';
import { ShoppingPreferenceUpdateManyWithoutUsersNestedInput } from '../shopping-preference/shopping-preference-update-many-without-users-nested.input';
import { HobbyUpdateManyWithoutUsersNestedInput } from '../hobby/hobby-update-many-without-users-nested.input';
import { ProductListingUpdateManyWithoutUploaderNestedInput } from '../product-listing/product-listing-update-many-without-uploader-nested.input';
import { ProductReportUpdateManyWithoutReporterNestedInput } from '../product-report/product-report-update-many-without-reporter-nested.input';
import { ProductListingUpdateManyWithoutWishlistedByNestedInput } from '../product-listing/product-listing-update-many-without-wishlisted-by-nested.input';
import { ConversationUpdateManyWithoutParticipantsNestedInput } from '../conversation/conversation-update-many-without-participants-nested.input';
import { UserUpdateManyWithoutFollowingNestedInput } from './user-update-many-without-following-nested.input';
import { UserUpdateManyWithoutFollowedByNestedInput } from './user-update-many-without-followed-by-nested.input';

@InputType()
export class UserUpdateWithoutSavedDealsInput {

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
    about?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => [AddressCreateInput], {nullable:true})
    addressBook?: Array<AddressCreateInput>;

    @Field(() => UserUpdatedmIdsInput, {nullable:true})
    dmIds?: UserUpdatedmIdsInput;

    @Field(() => UserStripeNullableUpdateEnvelopeInput, {nullable:true})
    stripe?: UserStripeNullableUpdateEnvelopeInput;

    @Field(() => UserUpdateorderIdsInput, {nullable:true})
    orderIds?: UserUpdateorderIdsInput;

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

    @Field(() => EduInstituteUpdateOneWithoutStudentsNestedInput, {nullable:true})
    eduInstitute?: EduInstituteUpdateOneWithoutStudentsNestedInput;

    @Field(() => ShoppingPreferenceUpdateManyWithoutUsersNestedInput, {nullable:true})
    shoppingPreferences?: ShoppingPreferenceUpdateManyWithoutUsersNestedInput;

    @Field(() => HobbyUpdateManyWithoutUsersNestedInput, {nullable:true})
    hobbies?: HobbyUpdateManyWithoutUsersNestedInput;

    @Field(() => ProductListingUpdateManyWithoutUploaderNestedInput, {nullable:true})
    productListings?: ProductListingUpdateManyWithoutUploaderNestedInput;

    @Field(() => ProductReportUpdateManyWithoutReporterNestedInput, {nullable:true})
    reportedProducts?: ProductReportUpdateManyWithoutReporterNestedInput;

    @Field(() => ProductListingUpdateManyWithoutWishlistedByNestedInput, {nullable:true})
    wishlist?: ProductListingUpdateManyWithoutWishlistedByNestedInput;

    @Field(() => ConversationUpdateManyWithoutParticipantsNestedInput, {nullable:true})
    conversations?: ConversationUpdateManyWithoutParticipantsNestedInput;

    @Field(() => UserUpdateManyWithoutFollowingNestedInput, {nullable:true})
    followedBy?: UserUpdateManyWithoutFollowingNestedInput;

    @Field(() => UserUpdateManyWithoutFollowedByNestedInput, {nullable:true})
    following?: UserUpdateManyWithoutFollowedByNestedInput;
}
