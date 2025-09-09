import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutConversationsInput } from './user-create-without-conversations.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutConversationsInput } from './user-create-or-connect-without-conversations.input';
import { UserUpsertWithWhereUniqueWithoutConversationsInput } from './user-upsert-with-where-unique-without-conversations.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutConversationsInput } from './user-update-with-where-unique-without-conversations.input';
import { UserUpdateManyWithWhereWithoutConversationsInput } from './user-update-many-with-where-without-conversations.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutConversationsNestedInput {

    @Field(() => [UserCreateWithoutConversationsInput], {nullable:true})
    @Type(() => UserCreateWithoutConversationsInput)
    create?: Array<UserCreateWithoutConversationsInput>;

    @Field(() => [UserCreateOrConnectWithoutConversationsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutConversationsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutConversationsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutConversationsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutConversationsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutConversationsInput>;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutConversationsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutConversationsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutConversationsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutConversationsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutConversationsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutConversationsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
