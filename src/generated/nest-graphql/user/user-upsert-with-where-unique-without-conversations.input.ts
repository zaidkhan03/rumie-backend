import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutConversationsInput } from './user-update-without-conversations.input';
import { UserCreateWithoutConversationsInput } from './user-create-without-conversations.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutConversationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateWithoutConversationsInput, {nullable:false})
    @Type(() => UserUpdateWithoutConversationsInput)
    update!: UserUpdateWithoutConversationsInput;

    @Field(() => UserCreateWithoutConversationsInput, {nullable:false})
    @Type(() => UserCreateWithoutConversationsInput)
    create!: UserCreateWithoutConversationsInput;
}
