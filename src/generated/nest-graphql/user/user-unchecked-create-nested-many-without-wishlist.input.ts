import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWishlistInput } from './user-create-without-wishlist.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutWishlistInput } from './user-create-or-connect-without-wishlist.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutWishlistInput {

    @Field(() => [UserCreateWithoutWishlistInput], {nullable:true})
    @Type(() => UserCreateWithoutWishlistInput)
    create?: Array<UserCreateWithoutWishlistInput>;

    @Field(() => [UserCreateOrConnectWithoutWishlistInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutWishlistInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutWishlistInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;
}
