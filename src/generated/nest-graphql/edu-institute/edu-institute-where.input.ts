import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { CampusChatListRelationFilter } from '../campus-chat/campus-chat-list-relation-filter.input';
import { ProductListingListRelationFilter } from '../product-listing/product-listing-list-relation-filter.input';

@InputType()
export class EduInstituteWhereInput {

    @Field(() => [EduInstituteWhereInput], {nullable:true})
    AND?: Array<EduInstituteWhereInput>;

    @Field(() => [EduInstituteWhereInput], {nullable:true})
    OR?: Array<EduInstituteWhereInput>;

    @Field(() => [EduInstituteWhereInput], {nullable:true})
    NOT?: Array<EduInstituteWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    domain?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    logo?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    state?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    zip?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    location?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    active?: BoolNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    passCode?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isRegistered?: BoolNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    students?: UserListRelationFilter;

    @Field(() => CampusChatListRelationFilter, {nullable:true})
    campusChats?: CampusChatListRelationFilter;

    @Field(() => ProductListingListRelationFilter, {nullable:true})
    productListings?: ProductListingListRelationFilter;
}
