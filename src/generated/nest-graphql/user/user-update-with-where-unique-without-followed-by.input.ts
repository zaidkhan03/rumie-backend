import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFollowedByInput } from './user-update-without-followed-by.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFollowedByInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateWithoutFollowedByInput, {nullable:false})
    @Type(() => UserUpdateWithoutFollowedByInput)
    data!: UserUpdateWithoutFollowedByInput;
}
