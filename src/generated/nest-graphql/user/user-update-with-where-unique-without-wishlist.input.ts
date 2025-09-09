import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutWishlistInput } from './user-update-without-wishlist.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutWishlistInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateWithoutWishlistInput, {nullable:false})
    @Type(() => UserUpdateWithoutWishlistInput)
    data!: UserUpdateWithoutWishlistInput;
}
