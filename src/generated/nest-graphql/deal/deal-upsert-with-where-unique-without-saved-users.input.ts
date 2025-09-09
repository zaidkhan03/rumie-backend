import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DealWhereUniqueInput } from './deal-where-unique.input';
import { Type } from 'class-transformer';
import { DealUpdateWithoutSavedUsersInput } from './deal-update-without-saved-users.input';
import { DealCreateWithoutSavedUsersInput } from './deal-create-without-saved-users.input';

@InputType()
export class DealUpsertWithWhereUniqueWithoutSavedUsersInput {

    @Field(() => DealWhereUniqueInput, {nullable:false})
    @Type(() => DealWhereUniqueInput)
    where!: Prisma.AtLeast<DealWhereUniqueInput, 'id'>;

    @Field(() => DealUpdateWithoutSavedUsersInput, {nullable:false})
    @Type(() => DealUpdateWithoutSavedUsersInput)
    update!: DealUpdateWithoutSavedUsersInput;

    @Field(() => DealCreateWithoutSavedUsersInput, {nullable:false})
    @Type(() => DealCreateWithoutSavedUsersInput)
    create!: DealCreateWithoutSavedUsersInput;
}
