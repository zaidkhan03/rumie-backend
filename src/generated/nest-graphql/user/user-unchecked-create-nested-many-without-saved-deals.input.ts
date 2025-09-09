import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSavedDealsInput } from './user-create-without-saved-deals.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSavedDealsInput } from './user-create-or-connect-without-saved-deals.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutSavedDealsInput {

    @Field(() => [UserCreateWithoutSavedDealsInput], {nullable:true})
    @Type(() => UserCreateWithoutSavedDealsInput)
    create?: Array<UserCreateWithoutSavedDealsInput>;

    @Field(() => [UserCreateOrConnectWithoutSavedDealsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSavedDealsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutSavedDealsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;
}
