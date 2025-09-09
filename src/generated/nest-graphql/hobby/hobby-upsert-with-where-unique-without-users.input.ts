import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HobbyWhereUniqueInput } from './hobby-where-unique.input';
import { Type } from 'class-transformer';
import { HobbyUpdateWithoutUsersInput } from './hobby-update-without-users.input';
import { HobbyCreateWithoutUsersInput } from './hobby-create-without-users.input';

@InputType()
export class HobbyUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => HobbyWhereUniqueInput, {nullable:false})
    @Type(() => HobbyWhereUniqueInput)
    where!: Prisma.AtLeast<HobbyWhereUniqueInput, 'id'>;

    @Field(() => HobbyUpdateWithoutUsersInput, {nullable:false})
    @Type(() => HobbyUpdateWithoutUsersInput)
    update!: HobbyUpdateWithoutUsersInput;

    @Field(() => HobbyCreateWithoutUsersInput, {nullable:false})
    @Type(() => HobbyCreateWithoutUsersInput)
    create!: HobbyCreateWithoutUsersInput;
}
