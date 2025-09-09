import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProductListingsInput } from './user-create-without-product-listings.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProductListingsInput } from './user-create-or-connect-without-product-listings.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutProductListingsInput {

    @Field(() => UserCreateWithoutProductListingsInput, {nullable:true})
    @Type(() => UserCreateWithoutProductListingsInput)
    create?: UserCreateWithoutProductListingsInput;

    @Field(() => UserCreateOrConnectWithoutProductListingsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProductListingsInput)
    connectOrCreate?: UserCreateOrConnectWithoutProductListingsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
}
