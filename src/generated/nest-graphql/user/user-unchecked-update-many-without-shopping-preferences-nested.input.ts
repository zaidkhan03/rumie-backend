import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutShoppingPreferencesInput } from './user-create-without-shopping-preferences.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutShoppingPreferencesInput } from './user-create-or-connect-without-shopping-preferences.input';
import { UserUpsertWithWhereUniqueWithoutShoppingPreferencesInput } from './user-upsert-with-where-unique-without-shopping-preferences.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutShoppingPreferencesInput } from './user-update-with-where-unique-without-shopping-preferences.input';
import { UserUpdateManyWithWhereWithoutShoppingPreferencesInput } from './user-update-many-with-where-without-shopping-preferences.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutShoppingPreferencesNestedInput {

    @Field(() => [UserCreateWithoutShoppingPreferencesInput], {nullable:true})
    @Type(() => UserCreateWithoutShoppingPreferencesInput)
    create?: Array<UserCreateWithoutShoppingPreferencesInput>;

    @Field(() => [UserCreateOrConnectWithoutShoppingPreferencesInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutShoppingPreferencesInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutShoppingPreferencesInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutShoppingPreferencesInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutShoppingPreferencesInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutShoppingPreferencesInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutShoppingPreferencesInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutShoppingPreferencesInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutShoppingPreferencesInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutShoppingPreferencesInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutShoppingPreferencesInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutShoppingPreferencesInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
