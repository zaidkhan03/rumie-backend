import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEduInstituteInput } from './user-create-without-edu-institute.input';

@InputType()
export class UserCreateOrConnectWithoutEduInstituteInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutEduInstituteInput, {nullable:false})
    @Type(() => UserCreateWithoutEduInstituteInput)
    create!: UserCreateWithoutEduInstituteInput;
}
