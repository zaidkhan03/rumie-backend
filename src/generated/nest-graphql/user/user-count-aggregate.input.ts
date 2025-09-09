import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    countryCode?: true;

    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;

    @Field(() => Boolean, {nullable:true})
    phoneNumberVerified?: true;

    @Field(() => Boolean, {nullable:true})
    roles?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    referrer?: true;

    @Field(() => Boolean, {nullable:true})
    gender?: true;

    @Field(() => Boolean, {nullable:true})
    displayPicture?: true;

    @Field(() => Boolean, {nullable:true})
    personalEmail?: true;

    @Field(() => Boolean, {nullable:true})
    eduInstituteId?: true;

    @Field(() => Boolean, {nullable:true})
    shoppingPreferenceIds?: true;

    @Field(() => Boolean, {nullable:true})
    hobbyIds?: true;

    @Field(() => Boolean, {nullable:true})
    about?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    wishlistIds?: true;

    @Field(() => Boolean, {nullable:true})
    savedDealIds?: true;

    @Field(() => Boolean, {nullable:true})
    conversationIds?: true;

    @Field(() => Boolean, {nullable:true})
    dmIds?: true;

    @Field(() => Boolean, {nullable:true})
    orderIds?: true;

    @Field(() => Boolean, {nullable:true})
    followedByIDs?: true;

    @Field(() => Boolean, {nullable:true})
    followingIDs?: true;

    @Field(() => Boolean, {nullable:true})
    legacyId?: true;

    @Field(() => Boolean, {nullable:true})
    blackListed?: true;

    @Field(() => Boolean, {nullable:true})
    addedManually?: true;

    @Field(() => Boolean, {nullable:true})
    registrationPlatform?: true;

    @Field(() => Boolean, {nullable:true})
    instagramUsername?: true;

    @Field(() => Boolean, {nullable:true})
    referralRockCode?: true;

    @Field(() => Boolean, {nullable:true})
    deactivated?: true;

    @Field(() => Boolean, {nullable:true})
    signupV?: true;

    @Field(() => Boolean, {nullable:true})
    isParent?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
