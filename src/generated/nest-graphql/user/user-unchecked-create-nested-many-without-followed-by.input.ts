import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowedByInput } from './user-create-without-followed-by.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFollowedByInput } from './user-create-or-connect-without-followed-by.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutFollowedByInput {

    @Field(() => [UserCreateWithoutFollowedByInput], {nullable:true})
    @Type(() => UserCreateWithoutFollowedByInput)
    create?: Array<UserCreateWithoutFollowedByInput>;

    @Field(() => [UserCreateOrConnectWithoutFollowedByInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFollowedByInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutFollowedByInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;
}
