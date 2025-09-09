import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutHobbiesInput } from './user-update-without-hobbies.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutHobbiesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateWithoutHobbiesInput, {nullable:false})
    @Type(() => UserUpdateWithoutHobbiesInput)
    data!: UserUpdateWithoutHobbiesInput;
}
