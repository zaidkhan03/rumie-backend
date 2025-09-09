import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutWishlistInput } from './user-create-without-wishlist.input';

@InputType()
export class UserCreateOrConnectWithoutWishlistInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutWishlistInput, {nullable:false})
    @Type(() => UserCreateWithoutWishlistInput)
    create!: UserCreateWithoutWishlistInput;
}
