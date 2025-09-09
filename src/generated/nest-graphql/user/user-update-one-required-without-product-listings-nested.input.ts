import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProductListingsInput } from './user-create-without-product-listings.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProductListingsInput } from './user-create-or-connect-without-product-listings.input';
import { UserUpsertWithoutProductListingsInput } from './user-upsert-without-product-listings.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutProductListingsInput } from './user-update-to-one-with-where-without-product-listings.input';

@InputType()
export class UserUpdateOneRequiredWithoutProductListingsNestedInput {

    @Field(() => UserCreateWithoutProductListingsInput, {nullable:true})
    @Type(() => UserCreateWithoutProductListingsInput)
    create?: UserCreateWithoutProductListingsInput;

    @Field(() => UserCreateOrConnectWithoutProductListingsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProductListingsInput)
    connectOrCreate?: UserCreateOrConnectWithoutProductListingsInput;

    @Field(() => UserUpsertWithoutProductListingsInput, {nullable:true})
    @Type(() => UserUpsertWithoutProductListingsInput)
    upsert?: UserUpsertWithoutProductListingsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateToOneWithWhereWithoutProductListingsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutProductListingsInput)
    update?: UserUpdateToOneWithWhereWithoutProductListingsInput;
}
