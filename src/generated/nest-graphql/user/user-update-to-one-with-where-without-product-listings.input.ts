import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutProductListingsInput } from './user-update-without-product-listings.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutProductListingsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutProductListingsInput, {nullable:false})
    @Type(() => UserUpdateWithoutProductListingsInput)
    data!: UserUpdateWithoutProductListingsInput;
}
