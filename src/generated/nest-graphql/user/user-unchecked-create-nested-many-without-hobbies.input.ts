import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHobbiesInput } from './user-create-without-hobbies.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHobbiesInput } from './user-create-or-connect-without-hobbies.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutHobbiesInput {

    @Field(() => [UserCreateWithoutHobbiesInput], {nullable:true})
    @Type(() => UserCreateWithoutHobbiesInput)
    create?: Array<UserCreateWithoutHobbiesInput>;

    @Field(() => [UserCreateOrConnectWithoutHobbiesInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHobbiesInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutHobbiesInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;
}
