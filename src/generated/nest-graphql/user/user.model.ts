import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { UserSession } from '../user-session/user-session.model';
import { Gender } from '../prisma/gender.enum';
import { Sizes } from '../sizes/sizes.model';
import { Image } from '../image/image.model';
import { Address } from '../address/address.model';
import { UserStripe } from '../user-stripe/user-stripe.model';
import { AltSignup } from '../alt-signup/alt-signup.model';
import { Platform } from '../prisma/platform.enum';
import { EduInstitute } from '../edu-institute/edu-institute.model';
import { ShoppingPreference } from '../shopping-preference/shopping-preference.model';
import { Hobby } from '../hobby/hobby.model';
import { ProductListing } from '../product-listing/product-listing.model';
import { ProductReport } from '../product-report/product-report.model';
import { Deal } from '../deal/deal.model';
import { Conversation } from '../conversation/conversation.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

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

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    phoneNumberVerified!: boolean;

    @Field(() => [Role], {nullable:true})
    roles!: Array<`${Role}`>;

    @Field(() => [UserSession], {nullable:true})
    sessions?: Array<UserSession>;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => String, {nullable:true})
    referrer!: string | null;

    @Field(() => Gender, {nullable:true})
    gender!: `${Gender}` | null;

    @Field(() => Sizes, {nullable:true})
    sizes?: Sizes | null;

    @Field(() => String, {nullable:true})
    displayPicture!: string | null;

    @Field(() => String, {nullable:true})
    personalEmail!: string | null;

    @Field(() => [Image], {nullable:true})
    images?: Array<Image>;

    @Field(() => String, {nullable:true})
    eduInstituteId!: string | null;

    @Field(() => [String], {nullable:true})
    shoppingPreferenceIds!: Array<string>;

    @Field(() => [String], {nullable:true})
    hobbyIds!: Array<string>;

    @Field(() => String, {nullable:true})
    about!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Address], {nullable:true})
    addressBook?: Array<Address>;

    @Field(() => [String], {nullable:true})
    wishlistIds!: Array<string>;

    @Field(() => [String], {nullable:true})
    savedDealIds!: Array<string>;

    @Field(() => [String], {nullable:true})
    conversationIds!: Array<string>;

    @Field(() => [String], {nullable:true})
    dmIds!: Array<string>;

    @Field(() => UserStripe, {nullable:true})
    stripe?: UserStripe | null;

    @Field(() => [String], {nullable:true})
    orderIds!: Array<string>;

    @Field(() => [String], {nullable:true})
    followedByIDs!: Array<string>;

    @Field(() => [String], {nullable:true})
    followingIDs!: Array<string>;

    @Field(() => String, {nullable:true})
    legacyId!: string | null;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    blackListed!: boolean;

    @Field(() => Boolean, {nullable:true})
    addedManually!: boolean | null;

    @Field(() => AltSignup, {nullable:true})
    altSignup?: AltSignup | null;

    @Field(() => Platform, {nullable:true})
    registrationPlatform!: `${Platform}` | null;

    @Field(() => String, {nullable:true})
    instagramUsername!: string | null;

    @Field(() => String, {nullable:true})
    referralRockCode!: string | null;

    @Field(() => Boolean, {defaultValue:false,nullable:true})
    deactivated!: boolean | null;

    @Field(() => String, {nullable:true})
    signupV!: string | null;

    @Field(() => Boolean, {nullable:true})
    isParent!: boolean | null;

    @Field(() => EduInstitute, {nullable:true})
    eduInstitute?: EduInstitute | null;

    @Field(() => [ShoppingPreference], {nullable:true})
    shoppingPreferences?: Array<ShoppingPreference>;

    @Field(() => [Hobby], {nullable:true})
    hobbies?: Array<Hobby>;

    @Field(() => [ProductListing], {nullable:true})
    productListings?: Array<ProductListing>;

    @Field(() => [ProductReport], {nullable:true})
    reportedProducts?: Array<ProductReport>;

    @Field(() => [ProductListing], {nullable:true})
    wishlist?: Array<ProductListing>;

    @Field(() => [Deal], {nullable:true})
    savedDeals?: Array<Deal>;

    @Field(() => [Conversation], {nullable:true})
    conversations?: Array<Conversation>;

    @Field(() => [User], {nullable:true})
    followedBy?: Array<User>;

    @Field(() => [User], {nullable:true})
    following?: Array<User>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
