import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFollowedByInput } from './user-create-without-followed-by.input';

@InputType()
export class UserCreateOrConnectWithoutFollowedByInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutFollowedByInput, {nullable:false})
    @Type(() => UserCreateWithoutFollowedByInput)
    create!: UserCreateWithoutFollowedByInput;
}
