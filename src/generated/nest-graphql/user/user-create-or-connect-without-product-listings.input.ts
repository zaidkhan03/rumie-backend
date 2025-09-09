import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProductListingsInput } from './user-create-without-product-listings.input';

@InputType()
export class UserCreateOrConnectWithoutProductListingsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutProductListingsInput, {nullable:false})
    @Type(() => UserCreateWithoutProductListingsInput)
    create!: UserCreateWithoutProductListingsInput;
}
