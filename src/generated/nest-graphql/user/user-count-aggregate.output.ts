import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    firstName!: number;

    @Field(() => Int, {nullable:false})
    lastName!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    countryCode!: number;

    @Field(() => Int, {nullable:false})
    phoneNumber!: number;

    @Field(() => Int, {nullable:false})
    phoneNumberVerified!: number;

    @Field(() => Int, {nullable:false})
    roles!: number;

    @Field(() => Int, {nullable:false})
    password!: number;

    @Field(() => Int, {nullable:false})
    referrer!: number;

    @Field(() => Int, {nullable:false})
    gender!: number;

    @Field(() => Int, {nullable:false})
    displayPicture!: number;

    @Field(() => Int, {nullable:false})
    personalEmail!: number;

    @Field(() => Int, {nullable:false})
    eduInstituteId!: number;

    @Field(() => Int, {nullable:false})
    shoppingPreferenceIds!: number;

    @Field(() => Int, {nullable:false})
    hobbyIds!: number;

    @Field(() => Int, {nullable:false})
    about!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    wishlistIds!: number;

    @Field(() => Int, {nullable:false})
    savedDealIds!: number;

    @Field(() => Int, {nullable:false})
    conversationIds!: number;

    @Field(() => Int, {nullable:false})
    dmIds!: number;

    @Field(() => Int, {nullable:false})
    orderIds!: number;

    @Field(() => Int, {nullable:false})
    followedByIDs!: number;

    @Field(() => Int, {nullable:false})
    followingIDs!: number;

    @Field(() => Int, {nullable:false})
    legacyId!: number;

    @Field(() => Int, {nullable:false})
    blackListed!: number;

    @Field(() => Int, {nullable:false})
    addedManually!: number;

    @Field(() => Int, {nullable:false})
    registrationPlatform!: number;

    @Field(() => Int, {nullable:false})
    instagramUsername!: number;

    @Field(() => Int, {nullable:false})
    referralRockCode!: number;

    @Field(() => Int, {nullable:false})
    deactivated!: number;

    @Field(() => Int, {nullable:false})
    signupV!: number;

    @Field(() => Int, {nullable:false})
    isParent!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
