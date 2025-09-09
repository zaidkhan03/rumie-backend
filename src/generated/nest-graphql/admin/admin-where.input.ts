import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumAdminRoleNullableListFilter } from '../prisma/enum-admin-role-nullable-list-filter.input';
import { AdminSessionObjectEqualityInput } from '../prisma/admin-session-object-equality.input';

@InputType()
export class AdminWhereInput {

    @Field(() => [AdminWhereInput], {nullable:true})
    AND?: Array<AdminWhereInput>;

    @Field(() => [AdminWhereInput], {nullable:true})
    OR?: Array<AdminWhereInput>;

    @Field(() => [AdminWhereInput], {nullable:true})
    NOT?: Array<AdminWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    countryCode?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => EnumAdminRoleNullableListFilter, {nullable:true})
    roles?: EnumAdminRoleNullableListFilter;

    @Field(() => [AdminSessionObjectEqualityInput], {nullable:true})
    sessions?: Array<AdminSessionObjectEqualityInput>;
}
