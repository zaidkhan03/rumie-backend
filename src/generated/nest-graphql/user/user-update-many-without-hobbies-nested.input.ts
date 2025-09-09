import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHobbiesInput } from './user-create-without-hobbies.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHobbiesInput } from './user-create-or-connect-without-hobbies.input';
import { UserUpsertWithWhereUniqueWithoutHobbiesInput } from './user-upsert-with-where-unique-without-hobbies.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutHobbiesInput } from './user-update-with-where-unique-without-hobbies.input';
import { UserUpdateManyWithWhereWithoutHobbiesInput } from './user-update-many-with-where-without-hobbies.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutHobbiesNestedInput {

    @Field(() => [UserCreateWithoutHobbiesInput], {nullable:true})
    @Type(() => UserCreateWithoutHobbiesInput)
    create?: Array<UserCreateWithoutHobbiesInput>;

    @Field(() => [UserCreateOrConnectWithoutHobbiesInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHobbiesInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutHobbiesInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutHobbiesInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutHobbiesInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutHobbiesInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutHobbiesInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutHobbiesInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutHobbiesInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutHobbiesInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutHobbiesInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutHobbiesInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
