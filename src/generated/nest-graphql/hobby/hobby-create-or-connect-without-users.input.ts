import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HobbyWhereUniqueInput } from './hobby-where-unique.input';
import { Type } from 'class-transformer';
import { HobbyCreateWithoutUsersInput } from './hobby-create-without-users.input';

@InputType()
export class HobbyCreateOrConnectWithoutUsersInput {

    @Field(() => HobbyWhereUniqueInput, {nullable:false})
    @Type(() => HobbyWhereUniqueInput)
    where!: Prisma.AtLeast<HobbyWhereUniqueInput, 'id'>;

    @Field(() => HobbyCreateWithoutUsersInput, {nullable:false})
    @Type(() => HobbyCreateWithoutUsersInput)
    create!: HobbyCreateWithoutUsersInput;
}
