import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutSavedDealsInput } from './user-update-without-saved-deals.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutSavedDealsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateWithoutSavedDealsInput, {nullable:false})
    @Type(() => UserUpdateWithoutSavedDealsInput)
    data!: UserUpdateWithoutSavedDealsInput;
}
