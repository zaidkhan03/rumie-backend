import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingPreferenceCreateWithoutUsersInput } from './shopping-preference-create-without-users.input';
import { Type } from 'class-transformer';
import { ShoppingPreferenceCreateOrConnectWithoutUsersInput } from './shopping-preference-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { ShoppingPreferenceWhereUniqueInput } from './shopping-preference-where-unique.input';

@InputType()
export class ShoppingPreferenceCreateNestedManyWithoutUsersInput {

    @Field(() => [ShoppingPreferenceCreateWithoutUsersInput], {nullable:true})
    @Type(() => ShoppingPreferenceCreateWithoutUsersInput)
    create?: Array<ShoppingPreferenceCreateWithoutUsersInput>;

    @Field(() => [ShoppingPreferenceCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => ShoppingPreferenceCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<ShoppingPreferenceCreateOrConnectWithoutUsersInput>;

    @Field(() => [ShoppingPreferenceWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingPreferenceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShoppingPreferenceWhereUniqueInput, 'id'>>;
}
