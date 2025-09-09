import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutShoppingPreferencesInput } from './user-create-without-shopping-preferences.input';

@InputType()
export class UserCreateOrConnectWithoutShoppingPreferencesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutShoppingPreferencesInput, {nullable:false})
    @Type(() => UserCreateWithoutShoppingPreferencesInput)
    create!: UserCreateWithoutShoppingPreferencesInput;
}
