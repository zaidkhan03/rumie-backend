import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumRoleNullableListFilter } from '../prisma/enum-role-nullable-list-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumGenderNullableWithAggregatesFilter } from '../prisma/enum-gender-nullable-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { EnumPlatformNullableWithAggregatesFilter } from '../prisma/enum-platform-nullable-with-aggregates-filter.input';

@InputType()
export class UserScalarWhereWithAggregatesInput {

    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    countryCode?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phoneNumber?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    phoneNumberVerified?: BoolWithAggregatesFilter;

    @Field(() => EnumRoleNullableListFilter, {nullable:true})
    roles?: EnumRoleNullableListFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    password?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    referrer?: StringNullableWithAggregatesFilter;

    @Field(() => EnumGenderNullableWithAggregatesFilter, {nullable:true})
    gender?: EnumGenderNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    displayPicture?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    personalEmail?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    eduInstituteId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    shoppingPreferenceIds?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    hobbyIds?: StringNullableListFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    about?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

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

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    legacyId?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    blackListed?: BoolWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    addedManually?: BoolNullableWithAggregatesFilter;

    @Field(() => EnumPlatformNullableWithAggregatesFilter, {nullable:true})
    registrationPlatform?: EnumPlatformNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    instagramUsername?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    referralRockCode?: StringNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    deactivated?: BoolNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    signupV?: StringNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    isParent?: BoolNullableWithAggregatesFilter;
}
