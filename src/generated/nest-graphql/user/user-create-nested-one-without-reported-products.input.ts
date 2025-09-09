import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReportedProductsInput } from './user-create-without-reported-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReportedProductsInput } from './user-create-or-connect-without-reported-products.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReportedProductsInput {

    @Field(() => UserCreateWithoutReportedProductsInput, {nullable:true})
    @Type(() => UserCreateWithoutReportedProductsInput)
    create?: UserCreateWithoutReportedProductsInput;

    @Field(() => UserCreateOrConnectWithoutReportedProductsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReportedProductsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReportedProductsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
}
