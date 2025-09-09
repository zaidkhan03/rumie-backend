import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreaterolesInput } from './user-createroles.input';
import { UserSessionCreateInput } from '../user-session/user-session-create.input';
import { Gender } from '../prisma/gender.enum';
import { SizesNullableCreateEnvelopeInput } from '../prisma/sizes-nullable-create-envelope.input';
import { ImageCreateInput } from '../image/image-create.input';
import { AddressCreateInput } from '../address/address-create.input';
import { UserCreatedmIdsInput } from './user-createdm-ids.input';
import { UserStripeNullableCreateEnvelopeInput } from '../prisma/user-stripe-nullable-create-envelope.input';
import { UserCreateorderIdsInput } from './user-createorder-ids.input';
import { AltSignupNullableCreateEnvelopeInput } from '../prisma/alt-signup-nullable-create-envelope.input';
import { Platform } from '../prisma/platform.enum';
import { EduInstituteCreateNestedOneWithoutStudentsInput } from '../edu-institute/edu-institute-create-nested-one-without-students.input';
import { ShoppingPreferenceCreateNestedManyWithoutUsersInput } from '../shopping-preference/shopping-preference-create-nested-many-without-users.input';
import { HobbyCreateNestedManyWithoutUsersInput } from '../hobby/hobby-create-nested-many-without-users.input';
import { ProductListingCreateNestedManyWithoutUploaderInput } from '../product-listing/product-listing-create-nested-many-without-uploader.input';
import { ProductListingCreateNestedManyWithoutWishlistedByInput } from '../product-listing/product-listing-create-nested-many-without-wishlisted-by.input';
import { DealCreateNestedManyWithoutSavedUsersInput } from '../deal/deal-create-nested-many-without-saved-users.input';
import { ConversationCreateNestedManyWithoutParticipantsInput } from '../conversation/conversation-create-nested-many-without-participants.input';
import { UserCreateNestedManyWithoutFollowingInput } from './user-create-nested-many-without-following.input';
import { UserCreateNestedManyWithoutFollowedByInput } from './user-create-nested-many-without-followed-by.input';

@InputType()
export class UserCreateWithoutReportedProductsInput {

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
    about?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => [AddressCreateInput], {nullable:true})
    addressBook?: Array<AddressCreateInput>;

    @Field(() => UserCreatedmIdsInput, {nullable:true})
    dmIds?: UserCreatedmIdsInput;

    @Field(() => UserStripeNullableCreateEnvelopeInput, {nullable:true})
    stripe?: UserStripeNullableCreateEnvelopeInput;

    @Field(() => UserCreateorderIdsInput, {nullable:true})
    orderIds?: UserCreateorderIdsInput;

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

    @Field(() => EduInstituteCreateNestedOneWithoutStudentsInput, {nullable:true})
    eduInstitute?: EduInstituteCreateNestedOneWithoutStudentsInput;

    @Field(() => ShoppingPreferenceCreateNestedManyWithoutUsersInput, {nullable:true})
    shoppingPreferences?: ShoppingPreferenceCreateNestedManyWithoutUsersInput;

    @Field(() => HobbyCreateNestedManyWithoutUsersInput, {nullable:true})
    hobbies?: HobbyCreateNestedManyWithoutUsersInput;

    @Field(() => ProductListingCreateNestedManyWithoutUploaderInput, {nullable:true})
    productListings?: ProductListingCreateNestedManyWithoutUploaderInput;

    @Field(() => ProductListingCreateNestedManyWithoutWishlistedByInput, {nullable:true})
    wishlist?: ProductListingCreateNestedManyWithoutWishlistedByInput;

    @Field(() => DealCreateNestedManyWithoutSavedUsersInput, {nullable:true})
    savedDeals?: DealCreateNestedManyWithoutSavedUsersInput;

    @Field(() => ConversationCreateNestedManyWithoutParticipantsInput, {nullable:true})
    conversations?: ConversationCreateNestedManyWithoutParticipantsInput;

    @Field(() => UserCreateNestedManyWithoutFollowingInput, {nullable:true})
    followedBy?: UserCreateNestedManyWithoutFollowingInput;

    @Field(() => UserCreateNestedManyWithoutFollowedByInput, {nullable:true})
    following?: UserCreateNestedManyWithoutFollowedByInput;
}
