import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DealWhereUniqueInput } from './deal-where-unique.input';
import { Type } from 'class-transformer';
import { DealUpdateWithoutSavedUsersInput } from './deal-update-without-saved-users.input';

@InputType()
export class DealUpdateWithWhereUniqueWithoutSavedUsersInput {

    @Field(() => DealWhereUniqueInput, {nullable:false})
    @Type(() => DealWhereUniqueInput)
    where!: Prisma.AtLeast<DealWhereUniqueInput, 'id'>;

    @Field(() => DealUpdateWithoutSavedUsersInput, {nullable:false})
    @Type(() => DealUpdateWithoutSavedUsersInput)
    data!: DealUpdateWithoutSavedUsersInput;
}
