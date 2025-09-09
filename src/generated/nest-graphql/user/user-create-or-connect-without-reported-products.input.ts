import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReportedProductsInput } from './user-create-without-reported-products.input';

@InputType()
export class UserCreateOrConnectWithoutReportedProductsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutReportedProductsInput, {nullable:false})
    @Type(() => UserCreateWithoutReportedProductsInput)
    create!: UserCreateWithoutReportedProductsInput;
}
