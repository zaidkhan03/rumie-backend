import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutShoppingPreferencesInput } from './user-update-without-shopping-preferences.input';
import { UserCreateWithoutShoppingPreferencesInput } from './user-create-without-shopping-preferences.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutShoppingPreferencesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateWithoutShoppingPreferencesInput, {nullable:false})
    @Type(() => UserUpdateWithoutShoppingPreferencesInput)
    update!: UserUpdateWithoutShoppingPreferencesInput;

    @Field(() => UserCreateWithoutShoppingPreferencesInput, {nullable:false})
    @Type(() => UserCreateWithoutShoppingPreferencesInput)
    create!: UserCreateWithoutShoppingPreferencesInput;
}
