import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSavedDealsInput } from './user-create-without-saved-deals.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSavedDealsInput } from './user-create-or-connect-without-saved-deals.input';
import { UserUpsertWithWhereUniqueWithoutSavedDealsInput } from './user-upsert-with-where-unique-without-saved-deals.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutSavedDealsInput } from './user-update-with-where-unique-without-saved-deals.input';
import { UserUpdateManyWithWhereWithoutSavedDealsInput } from './user-update-many-with-where-without-saved-deals.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutSavedDealsNestedInput {

    @Field(() => [UserCreateWithoutSavedDealsInput], {nullable:true})
    @Type(() => UserCreateWithoutSavedDealsInput)
    create?: Array<UserCreateWithoutSavedDealsInput>;

    @Field(() => [UserCreateOrConnectWithoutSavedDealsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSavedDealsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutSavedDealsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutSavedDealsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutSavedDealsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutSavedDealsInput>;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutSavedDealsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutSavedDealsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutSavedDealsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutSavedDealsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutSavedDealsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutSavedDealsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
