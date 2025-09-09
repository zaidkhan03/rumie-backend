import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShoppingPreferenceCreateWithoutUsersInput } from './shopping-preference-create-without-users.input';
import { Type } from 'class-transformer';
import { ShoppingPreferenceCreateOrConnectWithoutUsersInput } from './shopping-preference-create-or-connect-without-users.input';
import { ShoppingPreferenceUpsertWithWhereUniqueWithoutUsersInput } from './shopping-preference-upsert-with-where-unique-without-users.input';
import { Prisma } from '@prisma/client';
import { ShoppingPreferenceWhereUniqueInput } from './shopping-preference-where-unique.input';
import { ShoppingPreferenceUpdateWithWhereUniqueWithoutUsersInput } from './shopping-preference-update-with-where-unique-without-users.input';
import { ShoppingPreferenceUpdateManyWithWhereWithoutUsersInput } from './shopping-preference-update-many-with-where-without-users.input';
import { ShoppingPreferenceScalarWhereInput } from './shopping-preference-scalar-where.input';

@InputType()
export class ShoppingPreferenceUpdateManyWithoutUsersNestedInput {

    @Field(() => [ShoppingPreferenceCreateWithoutUsersInput], {nullable:true})
    @Type(() => ShoppingPreferenceCreateWithoutUsersInput)
    create?: Array<ShoppingPreferenceCreateWithoutUsersInput>;

    @Field(() => [ShoppingPreferenceCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => ShoppingPreferenceCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<ShoppingPreferenceCreateOrConnectWithoutUsersInput>;

    @Field(() => [ShoppingPreferenceUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => ShoppingPreferenceUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<ShoppingPreferenceUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => [ShoppingPreferenceWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingPreferenceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ShoppingPreferenceWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingPreferenceWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingPreferenceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ShoppingPreferenceWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingPreferenceWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingPreferenceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ShoppingPreferenceWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingPreferenceWhereUniqueInput], {nullable:true})
    @Type(() => ShoppingPreferenceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShoppingPreferenceWhereUniqueInput, 'id'>>;

    @Field(() => [ShoppingPreferenceUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => ShoppingPreferenceUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<ShoppingPreferenceUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [ShoppingPreferenceUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => ShoppingPreferenceUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<ShoppingPreferenceUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [ShoppingPreferenceScalarWhereInput], {nullable:true})
    @Type(() => ShoppingPreferenceScalarWhereInput)
    deleteMany?: Array<ShoppingPreferenceScalarWhereInput>;
}
