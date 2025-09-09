import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowedByInput } from './user-create-without-followed-by.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFollowedByInput } from './user-create-or-connect-without-followed-by.input';
import { UserUpsertWithWhereUniqueWithoutFollowedByInput } from './user-upsert-with-where-unique-without-followed-by.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFollowedByInput } from './user-update-with-where-unique-without-followed-by.input';
import { UserUpdateManyWithWhereWithoutFollowedByInput } from './user-update-many-with-where-without-followed-by.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutFollowedByNestedInput {

    @Field(() => [UserCreateWithoutFollowedByInput], {nullable:true})
    @Type(() => UserCreateWithoutFollowedByInput)
    create?: Array<UserCreateWithoutFollowedByInput>;

    @Field(() => [UserCreateOrConnectWithoutFollowedByInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFollowedByInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutFollowedByInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFollowedByInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutFollowedByInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutFollowedByInput>;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutFollowedByInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutFollowedByInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutFollowedByInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutFollowedByInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutFollowedByInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutFollowedByInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
