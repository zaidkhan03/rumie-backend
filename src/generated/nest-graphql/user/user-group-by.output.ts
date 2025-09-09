import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Gender } from '../prisma/gender.enum';
import { Platform } from '../prisma/platform.enum';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';

@ObjectType()
export class UserGroupBy {

    @Field(() => String, {nullable:false})
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

    @Field(() => Boolean, {nullable:false})
    phoneNumberVerified!: boolean;

    @Field(() => [Role], {nullable:true})
    roles?: Array<`${Role}`>;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    referrer?: string;

    @Field(() => Gender, {nullable:true})
    gender?: `${Gender}`;

    @Field(() => String, {nullable:true})
    displayPicture?: string;

    @Field(() => String, {nullable:true})
    personalEmail?: string;

    @Field(() => String, {nullable:true})
    eduInstituteId?: string;

    @Field(() => [String], {nullable:true})
    shoppingPreferenceIds?: Array<string>;

    @Field(() => [String], {nullable:true})
    hobbyIds?: Array<string>;

    @Field(() => String, {nullable:true})
    about?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => [String], {nullable:true})
    wishlistIds?: Array<string>;

    @Field(() => [String], {nullable:true})
    savedDealIds?: Array<string>;

    @Field(() => [String], {nullable:true})
    conversationIds?: Array<string>;

    @Field(() => [String], {nullable:true})
    dmIds?: Array<string>;

    @Field(() => [String], {nullable:true})
    orderIds?: Array<string>;

    @Field(() => [String], {nullable:true})
    followedByIDs?: Array<string>;

    @Field(() => [String], {nullable:true})
    followingIDs?: Array<string>;

    @Field(() => String, {nullable:true})
    legacyId?: string;

    @Field(() => Boolean, {nullable:false})
    blackListed!: boolean;

    @Field(() => Boolean, {nullable:true})
    addedManually?: boolean;

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

    @Field(() => UserCountAggregate, {nullable:true})
    _count?: UserCountAggregate;

    @Field(() => UserMinAggregate, {nullable:true})
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: UserMaxAggregate;
}
