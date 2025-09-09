import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumRoleNullableListFilter } from '../prisma/enum-role-nullable-list-filter.input';
import { UserSessionObjectEqualityInput } from '../prisma/user-session-object-equality.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumGenderNullableFilter } from '../prisma/enum-gender-nullable-filter.input';
import { SizesNullableCompositeFilter } from '../prisma/sizes-nullable-composite-filter.input';
import { ImageObjectEqualityInput } from '../prisma/image-object-equality.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AddressObjectEqualityInput } from '../prisma/address-object-equality.input';
import { UserStripeNullableCompositeFilter } from '../prisma/user-stripe-nullable-composite-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { AltSignupNullableCompositeFilter } from '../prisma/alt-signup-nullable-composite-filter.input';
import { EnumPlatformNullableFilter } from '../prisma/enum-platform-nullable-filter.input';
import { EduInstituteNullableRelationFilter } from '../edu-institute/edu-institute-nullable-relation-filter.input';
import { ShoppingPreferenceListRelationFilter } from '../shopping-preference/shopping-preference-list-relation-filter.input';
import { HobbyListRelationFilter } from '../hobby/hobby-list-relation-filter.input';
import { ProductListingListRelationFilter } from '../product-listing/product-listing-list-relation-filter.input';
import { ProductReportListRelationFilter } from '../product-report/product-report-list-relation-filter.input';
import { DealListRelationFilter } from '../deal/deal-list-relation-filter.input';
import { ConversationListRelationFilter } from '../conversation/conversation-list-relation-filter.input';
import { UserListRelationFilter } from './user-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    countryCode?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    phoneNumberVerified?: BoolFilter;

    @Field(() => EnumRoleNullableListFilter, {nullable:true})
    roles?: EnumRoleNullableListFilter;

    @Field(() => [UserSessionObjectEqualityInput], {nullable:true})
    sessions?: Array<UserSessionObjectEqualityInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    referrer?: StringNullableFilter;

    @Field(() => EnumGenderNullableFilter, {nullable:true})
    gender?: EnumGenderNullableFilter;

    @Field(() => SizesNullableCompositeFilter, {nullable:true})
    sizes?: SizesNullableCompositeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    displayPicture?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    personalEmail?: StringNullableFilter;

    @Field(() => [ImageObjectEqualityInput], {nullable:true})
    images?: Array<ImageObjectEqualityInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    eduInstituteId?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    shoppingPreferenceIds?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    hobbyIds?: StringNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    about?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => [AddressObjectEqualityInput], {nullable:true})
    addressBook?: Array<AddressObjectEqualityInput>;

    @Field(() => StringNullableListFilter, {nullable:true})
    wishlistIds?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    savedDealIds?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    conversationIds?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    dmIds?: StringNullableListFilter;

    @Field(() => UserStripeNullableCompositeFilter, {nullable:true})
    stripe?: UserStripeNullableCompositeFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    orderIds?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    followedByIDs?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    followingIDs?: StringNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    legacyId?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    blackListed?: BoolFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    addedManually?: BoolNullableFilter;

    @Field(() => AltSignupNullableCompositeFilter, {nullable:true})
    altSignup?: AltSignupNullableCompositeFilter;

    @Field(() => EnumPlatformNullableFilter, {nullable:true})
    registrationPlatform?: EnumPlatformNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    instagramUsername?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    referralRockCode?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    deactivated?: BoolNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    signupV?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isParent?: BoolNullableFilter;

    @Field(() => EduInstituteNullableRelationFilter, {nullable:true})
    eduInstitute?: EduInstituteNullableRelationFilter;

    @Field(() => ShoppingPreferenceListRelationFilter, {nullable:true})
    shoppingPreferences?: ShoppingPreferenceListRelationFilter;

    @Field(() => HobbyListRelationFilter, {nullable:true})
    hobbies?: HobbyListRelationFilter;

    @Field(() => ProductListingListRelationFilter, {nullable:true})
    productListings?: ProductListingListRelationFilter;

    @Field(() => ProductReportListRelationFilter, {nullable:true})
    reportedProducts?: ProductReportListRelationFilter;

    @Field(() => ProductListingListRelationFilter, {nullable:true})
    wishlist?: ProductListingListRelationFilter;

    @Field(() => DealListRelationFilter, {nullable:true})
    savedDeals?: DealListRelationFilter;

    @Field(() => ConversationListRelationFilter, {nullable:true})
    conversations?: ConversationListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    followedBy?: UserListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    following?: UserListRelationFilter;
}
