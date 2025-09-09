import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumAdminRoleNullableListFilter } from '../prisma/enum-admin-role-nullable-list-filter.input';

@InputType()
export class AdminScalarWhereWithAggregatesInput {

    @Field(() => [AdminScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AdminScalarWhereWithAggregatesInput>;

    @Field(() => [AdminScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AdminScalarWhereWithAggregatesInput>;

    @Field(() => [AdminScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AdminScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    username?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    countryCode?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phoneNumber?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => EnumAdminRoleNullableListFilter, {nullable:true})
    roles?: EnumAdminRoleNullableListFilter;
}
