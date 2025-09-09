import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEduInstituteInput } from './user-create-without-edu-institute.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEduInstituteInput } from './user-create-or-connect-without-edu-institute.input';
import { UserUpsertWithWhereUniqueWithoutEduInstituteInput } from './user-upsert-with-where-unique-without-edu-institute.input';
import { UserCreateManyEduInstituteInputEnvelope } from './user-create-many-edu-institute-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutEduInstituteInput } from './user-update-with-where-unique-without-edu-institute.input';
import { UserUpdateManyWithWhereWithoutEduInstituteInput } from './user-update-many-with-where-without-edu-institute.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutEduInstituteNestedInput {

    @Field(() => [UserCreateWithoutEduInstituteInput], {nullable:true})
    @Type(() => UserCreateWithoutEduInstituteInput)
    create?: Array<UserCreateWithoutEduInstituteInput>;

    @Field(() => [UserCreateOrConnectWithoutEduInstituteInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEduInstituteInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutEduInstituteInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutEduInstituteInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutEduInstituteInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutEduInstituteInput>;

    @Field(() => UserCreateManyEduInstituteInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyEduInstituteInputEnvelope)
    createMany?: UserCreateManyEduInstituteInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutEduInstituteInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutEduInstituteInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutEduInstituteInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutEduInstituteInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutEduInstituteInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutEduInstituteInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
