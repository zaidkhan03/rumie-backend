import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReportedProductsInput } from './user-create-without-reported-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReportedProductsInput } from './user-create-or-connect-without-reported-products.input';
import { UserUpsertWithoutReportedProductsInput } from './user-upsert-without-reported-products.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReportedProductsInput } from './user-update-to-one-with-where-without-reported-products.input';

@InputType()
export class UserUpdateOneRequiredWithoutReportedProductsNestedInput {

    @Field(() => UserCreateWithoutReportedProductsInput, {nullable:true})
    @Type(() => UserCreateWithoutReportedProductsInput)
    create?: UserCreateWithoutReportedProductsInput;

    @Field(() => UserCreateOrConnectWithoutReportedProductsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReportedProductsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReportedProductsInput;

    @Field(() => UserUpsertWithoutReportedProductsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReportedProductsInput)
    upsert?: UserUpsertWithoutReportedProductsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateToOneWithWhereWithoutReportedProductsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReportedProductsInput)
    update?: UserUpdateToOneWithWhereWithoutReportedProductsInput;
}
