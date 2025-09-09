import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HobbyCreateWithoutUsersInput } from './hobby-create-without-users.input';
import { Type } from 'class-transformer';
import { HobbyCreateOrConnectWithoutUsersInput } from './hobby-create-or-connect-without-users.input';
import { HobbyUpsertWithWhereUniqueWithoutUsersInput } from './hobby-upsert-with-where-unique-without-users.input';
import { Prisma } from '@prisma/client';
import { HobbyWhereUniqueInput } from './hobby-where-unique.input';
import { HobbyUpdateWithWhereUniqueWithoutUsersInput } from './hobby-update-with-where-unique-without-users.input';
import { HobbyUpdateManyWithWhereWithoutUsersInput } from './hobby-update-many-with-where-without-users.input';
import { HobbyScalarWhereInput } from './hobby-scalar-where.input';

@InputType()
export class HobbyUncheckedUpdateManyWithoutUsersNestedInput {

    @Field(() => [HobbyCreateWithoutUsersInput], {nullable:true})
    @Type(() => HobbyCreateWithoutUsersInput)
    create?: Array<HobbyCreateWithoutUsersInput>;

    @Field(() => [HobbyCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => HobbyCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<HobbyCreateOrConnectWithoutUsersInput>;

    @Field(() => [HobbyUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => HobbyUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<HobbyUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => [HobbyWhereUniqueInput], {nullable:true})
    @Type(() => HobbyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HobbyWhereUniqueInput, 'id'>>;

    @Field(() => [HobbyWhereUniqueInput], {nullable:true})
    @Type(() => HobbyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HobbyWhereUniqueInput, 'id'>>;

    @Field(() => [HobbyWhereUniqueInput], {nullable:true})
    @Type(() => HobbyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HobbyWhereUniqueInput, 'id'>>;

    @Field(() => [HobbyWhereUniqueInput], {nullable:true})
    @Type(() => HobbyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HobbyWhereUniqueInput, 'id'>>;

    @Field(() => [HobbyUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => HobbyUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<HobbyUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [HobbyUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => HobbyUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<HobbyUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [HobbyScalarWhereInput], {nullable:true})
    @Type(() => HobbyScalarWhereInput)
    deleteMany?: Array<HobbyScalarWhereInput>;
}
