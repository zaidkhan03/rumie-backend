import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealCreateWithoutSavedUsersInput } from './deal-create-without-saved-users.input';
import { Type } from 'class-transformer';
import { DealCreateOrConnectWithoutSavedUsersInput } from './deal-create-or-connect-without-saved-users.input';
import { DealUpsertWithWhereUniqueWithoutSavedUsersInput } from './deal-upsert-with-where-unique-without-saved-users.input';
import { Prisma } from '@prisma/client';
import { DealWhereUniqueInput } from './deal-where-unique.input';
import { DealUpdateWithWhereUniqueWithoutSavedUsersInput } from './deal-update-with-where-unique-without-saved-users.input';
import { DealUpdateManyWithWhereWithoutSavedUsersInput } from './deal-update-many-with-where-without-saved-users.input';
import { DealScalarWhereInput } from './deal-scalar-where.input';

@InputType()
export class DealUncheckedUpdateManyWithoutSavedUsersNestedInput {

    @Field(() => [DealCreateWithoutSavedUsersInput], {nullable:true})
    @Type(() => DealCreateWithoutSavedUsersInput)
    create?: Array<DealCreateWithoutSavedUsersInput>;

    @Field(() => [DealCreateOrConnectWithoutSavedUsersInput], {nullable:true})
    @Type(() => DealCreateOrConnectWithoutSavedUsersInput)
    connectOrCreate?: Array<DealCreateOrConnectWithoutSavedUsersInput>;

    @Field(() => [DealUpsertWithWhereUniqueWithoutSavedUsersInput], {nullable:true})
    @Type(() => DealUpsertWithWhereUniqueWithoutSavedUsersInput)
    upsert?: Array<DealUpsertWithWhereUniqueWithoutSavedUsersInput>;

    @Field(() => [DealWhereUniqueInput], {nullable:true})
    @Type(() => DealWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DealWhereUniqueInput, 'id'>>;

    @Field(() => [DealWhereUniqueInput], {nullable:true})
    @Type(() => DealWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DealWhereUniqueInput, 'id'>>;

    @Field(() => [DealWhereUniqueInput], {nullable:true})
    @Type(() => DealWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DealWhereUniqueInput, 'id'>>;

    @Field(() => [DealWhereUniqueInput], {nullable:true})
    @Type(() => DealWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DealWhereUniqueInput, 'id'>>;

    @Field(() => [DealUpdateWithWhereUniqueWithoutSavedUsersInput], {nullable:true})
    @Type(() => DealUpdateWithWhereUniqueWithoutSavedUsersInput)
    update?: Array<DealUpdateWithWhereUniqueWithoutSavedUsersInput>;

    @Field(() => [DealUpdateManyWithWhereWithoutSavedUsersInput], {nullable:true})
    @Type(() => DealUpdateManyWithWhereWithoutSavedUsersInput)
    updateMany?: Array<DealUpdateManyWithWhereWithoutSavedUsersInput>;

    @Field(() => [DealScalarWhereInput], {nullable:true})
    @Type(() => DealScalarWhereInput)
    deleteMany?: Array<DealScalarWhereInput>;
}
