import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEduInstituteInput } from './user-create-without-edu-institute.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEduInstituteInput } from './user-create-or-connect-without-edu-institute.input';
import { UserCreateManyEduInstituteInputEnvelope } from './user-create-many-edu-institute-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutEduInstituteInput {

    @Field(() => [UserCreateWithoutEduInstituteInput], {nullable:true})
    @Type(() => UserCreateWithoutEduInstituteInput)
    create?: Array<UserCreateWithoutEduInstituteInput>;

    @Field(() => [UserCreateOrConnectWithoutEduInstituteInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEduInstituteInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutEduInstituteInput>;

    @Field(() => UserCreateManyEduInstituteInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyEduInstituteInputEnvelope)
    createMany?: UserCreateManyEduInstituteInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;
}
