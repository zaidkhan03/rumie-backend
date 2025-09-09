import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutWishlistInput } from './user-update-without-wishlist.input';
import { UserCreateWithoutWishlistInput } from './user-create-without-wishlist.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutWishlistInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateWithoutWishlistInput, {nullable:false})
    @Type(() => UserUpdateWithoutWishlistInput)
    update!: UserUpdateWithoutWishlistInput;

    @Field(() => UserCreateWithoutWishlistInput, {nullable:false})
    @Type(() => UserCreateWithoutWishlistInput)
    create!: UserCreateWithoutWishlistInput;
}
