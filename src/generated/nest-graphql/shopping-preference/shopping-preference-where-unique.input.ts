import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingPreferenceWhereInput } from './shopping-preference-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class ShoppingPreferenceWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ShoppingPreferenceWhereInput], {nullable:true})
    AND?: Array<ShoppingPreferenceWhereInput>;

    @Field(() => [ShoppingPreferenceWhereInput], {nullable:true})
    OR?: Array<ShoppingPreferenceWhereInput>;

    @Field(() => [ShoppingPreferenceWhereInput], {nullable:true})
    NOT?: Array<ShoppingPreferenceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    userIds?: StringNullableListFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;
}
