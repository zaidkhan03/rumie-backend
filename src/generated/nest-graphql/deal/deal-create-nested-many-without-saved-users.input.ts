import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealCreateWithoutSavedUsersInput } from './deal-create-without-saved-users.input';
import { Type } from 'class-transformer';
import { DealCreateOrConnectWithoutSavedUsersInput } from './deal-create-or-connect-without-saved-users.input';
import { Prisma } from '@prisma/client';
import { DealWhereUniqueInput } from './deal-where-unique.input';

@InputType()
export class DealCreateNestedManyWithoutSavedUsersInput {

    @Field(() => [DealCreateWithoutSavedUsersInput], {nullable:true})
    @Type(() => DealCreateWithoutSavedUsersInput)
    create?: Array<DealCreateWithoutSavedUsersInput>;

    @Field(() => [DealCreateOrConnectWithoutSavedUsersInput], {nullable:true})
    @Type(() => DealCreateOrConnectWithoutSavedUsersInput)
    connectOrCreate?: Array<DealCreateOrConnectWithoutSavedUsersInput>;

    @Field(() => [DealWhereUniqueInput], {nullable:true})
    @Type(() => DealWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DealWhereUniqueInput, 'id'>>;
}
