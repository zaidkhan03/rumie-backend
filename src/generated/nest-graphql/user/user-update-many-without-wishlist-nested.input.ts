import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWishlistInput } from './user-create-without-wishlist.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutWishlistInput } from './user-create-or-connect-without-wishlist.input';
import { UserUpsertWithWhereUniqueWithoutWishlistInput } from './user-upsert-with-where-unique-without-wishlist.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutWishlistInput } from './user-update-with-where-unique-without-wishlist.input';
import { UserUpdateManyWithWhereWithoutWishlistInput } from './user-update-many-with-where-without-wishlist.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutWishlistNestedInput {

    @Field(() => [UserCreateWithoutWishlistInput], {nullable:true})
    @Type(() => UserCreateWithoutWishlistInput)
    create?: Array<UserCreateWithoutWishlistInput>;

    @Field(() => [UserCreateOrConnectWithoutWishlistInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutWishlistInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutWishlistInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutWishlistInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutWishlistInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutWishlistInput>;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutWishlistInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutWishlistInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutWishlistInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutWishlistInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutWishlistInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutWishlistInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
