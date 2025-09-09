import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { Platform } from '../prisma/platform.enum';

@ObjectType()
export class UserMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    countryCode?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => Boolean, {nullable:true})
    phoneNumberVerified?: boolean;

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

    @Field(() => String, {nullable:true})
    about?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    legacyId?: string;

    @Field(() => Boolean, {nullable:true})
    blackListed?: boolean;

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
}
