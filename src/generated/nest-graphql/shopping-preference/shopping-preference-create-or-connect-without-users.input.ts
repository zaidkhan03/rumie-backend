import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingPreferenceWhereUniqueInput } from './shopping-preference-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingPreferenceCreateWithoutUsersInput } from './shopping-preference-create-without-users.input';

@InputType()
export class ShoppingPreferenceCreateOrConnectWithoutUsersInput {

    @Field(() => ShoppingPreferenceWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingPreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingPreferenceWhereUniqueInput, 'id'>;

    @Field(() => ShoppingPreferenceCreateWithoutUsersInput, {nullable:false})
    @Type(() => ShoppingPreferenceCreateWithoutUsersInput)
    create!: ShoppingPreferenceCreateWithoutUsersInput;
}
