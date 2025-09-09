import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutEduInstituteInput } from './user-update-without-edu-institute.input';
import { UserCreateWithoutEduInstituteInput } from './user-create-without-edu-institute.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutEduInstituteInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateWithoutEduInstituteInput, {nullable:false})
    @Type(() => UserUpdateWithoutEduInstituteInput)
    update!: UserUpdateWithoutEduInstituteInput;

    @Field(() => UserCreateWithoutEduInstituteInput, {nullable:false})
    @Type(() => UserCreateWithoutEduInstituteInput)
    create!: UserCreateWithoutEduInstituteInput;
}
