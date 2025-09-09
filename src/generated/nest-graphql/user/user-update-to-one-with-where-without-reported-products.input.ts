import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutReportedProductsInput } from './user-update-without-reported-products.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutReportedProductsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutReportedProductsInput, {nullable:false})
    @Type(() => UserUpdateWithoutReportedProductsInput)
    data!: UserUpdateWithoutReportedProductsInput;
}
