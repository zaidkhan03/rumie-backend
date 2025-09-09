import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProductListingsInput } from './user-update-without-product-listings.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProductListingsInput } from './user-create-without-product-listings.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutProductListingsInput {

    @Field(() => UserUpdateWithoutProductListingsInput, {nullable:false})
    @Type(() => UserUpdateWithoutProductListingsInput)
    update!: UserUpdateWithoutProductListingsInput;

    @Field(() => UserCreateWithoutProductListingsInput, {nullable:false})
    @Type(() => UserCreateWithoutProductListingsInput)
    create!: UserCreateWithoutProductListingsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
