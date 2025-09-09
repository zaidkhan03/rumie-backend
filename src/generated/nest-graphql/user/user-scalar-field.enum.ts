import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    email = "email",
    countryCode = "countryCode",
    phoneNumber = "phoneNumber",
    phoneNumberVerified = "phoneNumberVerified",
    roles = "roles",
    password = "password",
    referrer = "referrer",
    gender = "gender",
    displayPicture = "displayPicture",
    personalEmail = "personalEmail",
    eduInstituteId = "eduInstituteId",
    shoppingPreferenceIds = "shoppingPreferenceIds",
    hobbyIds = "hobbyIds",
    about = "about",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    wishlistIds = "wishlistIds",
    savedDealIds = "savedDealIds",
    conversationIds = "conversationIds",
    dmIds = "dmIds",
    orderIds = "orderIds",
    followedByIDs = "followedByIDs",
    followingIDs = "followingIDs",
    legacyId = "legacyId",
    blackListed = "blackListed",
    addedManually = "addedManually",
    registrationPlatform = "registrationPlatform",
    instagramUsername = "instagramUsername",
    referralRockCode = "referralRockCode",
    deactivated = "deactivated",
    signupV = "signupV",
    isParent = "isParent"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
