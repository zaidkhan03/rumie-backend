import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutShoppingPreferencesInput } from './user-create-without-shopping-preferences.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutShoppingPreferencesInput } from './user-create-or-connect-without-shopping-preferences.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutShoppingPreferencesInput {

    @Field(() => [UserCreateWithoutShoppingPreferencesInput], {nullable:true})
    @Type(() => UserCreateWithoutShoppingPreferencesInput)
    create?: Array<UserCreateWithoutShoppingPreferencesInput>;

    @Field(() => [UserCreateOrConnectWithoutShoppingPreferencesInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutShoppingPreferencesInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutShoppingPreferencesInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;
}
