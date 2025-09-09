import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutConversationsInput } from './user-create-without-conversations.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutConversationsInput } from './user-create-or-connect-without-conversations.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutConversationsInput {

    @Field(() => [UserCreateWithoutConversationsInput], {nullable:true})
    @Type(() => UserCreateWithoutConversationsInput)
    create?: Array<UserCreateWithoutConversationsInput>;

    @Field(() => [UserCreateOrConnectWithoutConversationsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutConversationsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutConversationsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;
}
