import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReportedProductsInput } from './user-update-without-reported-products.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReportedProductsInput } from './user-create-without-reported-products.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutReportedProductsInput {

    @Field(() => UserUpdateWithoutReportedProductsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReportedProductsInput)
    update!: UserUpdateWithoutReportedProductsInput;

    @Field(() => UserCreateWithoutReportedProductsInput, {nullable:false})
    @Type(() => UserCreateWithoutReportedProductsInput)
    create!: UserCreateWithoutReportedProductsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
