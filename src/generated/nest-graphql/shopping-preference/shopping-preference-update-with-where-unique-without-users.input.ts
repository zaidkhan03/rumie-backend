import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShoppingPreferenceWhereUniqueInput } from './shopping-preference-where-unique.input';
import { Type } from 'class-transformer';
import { ShoppingPreferenceUpdateWithoutUsersInput } from './shopping-preference-update-without-users.input';

@InputType()
export class ShoppingPreferenceUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => ShoppingPreferenceWhereUniqueInput, {nullable:false})
    @Type(() => ShoppingPreferenceWhereUniqueInput)
    where!: Prisma.AtLeast<ShoppingPreferenceWhereUniqueInput, 'id'>;

    @Field(() => ShoppingPreferenceUpdateWithoutUsersInput, {nullable:false})
    @Type(() => ShoppingPreferenceUpdateWithoutUsersInput)
    data!: ShoppingPreferenceUpdateWithoutUsersInput;
}
