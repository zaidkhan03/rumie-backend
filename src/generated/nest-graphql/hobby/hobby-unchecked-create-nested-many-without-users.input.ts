import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HobbyCreateWithoutUsersInput } from './hobby-create-without-users.input';
import { Type } from 'class-transformer';
import { HobbyCreateOrConnectWithoutUsersInput } from './hobby-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { HobbyWhereUniqueInput } from './hobby-where-unique.input';

@InputType()
export class HobbyUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [HobbyCreateWithoutUsersInput], {nullable:true})
    @Type(() => HobbyCreateWithoutUsersInput)
    create?: Array<HobbyCreateWithoutUsersInput>;

    @Field(() => [HobbyCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => HobbyCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<HobbyCreateOrConnectWithoutUsersInput>;

    @Field(() => [HobbyWhereUniqueInput], {nullable:true})
    @Type(() => HobbyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HobbyWhereUniqueInput, 'id'>>;
}
