import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSavedDealsInput } from './user-create-without-saved-deals.input';

@InputType()
export class UserCreateOrConnectWithoutSavedDealsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutSavedDealsInput, {nullable:false})
    @Type(() => UserCreateWithoutSavedDealsInput)
    create!: UserCreateWithoutSavedDealsInput;
}
