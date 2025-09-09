import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumRoleNullableListFilter } from '../prisma/enum-role-nullable-list-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumGenderNullableFilter } from '../prisma/enum-gender-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { EnumPlatformNullableFilter } from '../prisma/enum-platform-nullable-filter.input';

@InputType()
export class UserScalarWhereInput {

    @Field(() => [UserScalarWhereInput], {nullable:true})
    AND?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    OR?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    NOT?: Array<UserScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    referrer?: StringNullableFilter;

    @Field(() => EnumGenderNullableFilter, {nullable:true})
    gender?: EnumGenderNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    displayPicture?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    personalEmail?: StringNullableFilter;

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

    @Field(() => StringNullableListFilter, {nullable:true})
    wishlistIds?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    savedDealIds?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    conversationIds?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    dmIds?: StringNullableListFilter;

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
}
