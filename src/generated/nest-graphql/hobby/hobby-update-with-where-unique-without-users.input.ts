import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HobbyWhereUniqueInput } from './hobby-where-unique.input';
import { Type } from 'class-transformer';
import { HobbyUpdateWithoutUsersInput } from './hobby-update-without-users.input';

@InputType()
export class HobbyUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => HobbyWhereUniqueInput, {nullable:false})
    @Type(() => HobbyWhereUniqueInput)
    where!: Prisma.AtLeast<HobbyWhereUniqueInput, 'id'>;

    @Field(() => HobbyUpdateWithoutUsersInput, {nullable:false})
    @Type(() => HobbyUpdateWithoutUsersInput)
    data!: HobbyUpdateWithoutUsersInput;
}
