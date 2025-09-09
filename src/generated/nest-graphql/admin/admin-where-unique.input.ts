import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminWhereInput } from './admin-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumAdminRoleNullableListFilter } from '../prisma/enum-admin-role-nullable-list-filter.input';
import { AdminSessionObjectEqualityInput } from '../prisma/admin-session-object-equality.input';

@InputType()
export class AdminWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => [AdminWhereInput], {nullable:true})
    AND?: Array<AdminWhereInput>;

    @Field(() => [AdminWhereInput], {nullable:true})
    OR?: Array<AdminWhereInput>;

    @Field(() => [AdminWhereInput], {nullable:true})
    NOT?: Array<AdminWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    countryCode?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: StringFilter;

    @Field(() => EnumAdminRoleNullableListFilter, {nullable:true})
    roles?: EnumAdminRoleNullableListFilter;

    @Field(() => [AdminSessionObjectEqualityInput], {nullable:true})
    sessions?: Array<AdminSessionObjectEqualityInput>;
}
