import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatCreateWithoutEduInstituteInput } from './campus-chat-create-without-edu-institute.input';
import { Type } from 'class-transformer';
import { CampusChatCreateOrConnectWithoutEduInstituteInput } from './campus-chat-create-or-connect-without-edu-institute.input';
import { CampusChatCreateManyEduInstituteInputEnvelope } from './campus-chat-create-many-edu-institute-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CampusChatWhereUniqueInput } from './campus-chat-where-unique.input';

@InputType()
export class CampusChatCreateNestedManyWithoutEduInstituteInput {

    @Field(() => [CampusChatCreateWithoutEduInstituteInput], {nullable:true})
    @Type(() => CampusChatCreateWithoutEduInstituteInput)
    create?: Array<CampusChatCreateWithoutEduInstituteInput>;

    @Field(() => [CampusChatCreateOrConnectWithoutEduInstituteInput], {nullable:true})
    @Type(() => CampusChatCreateOrConnectWithoutEduInstituteInput)
    connectOrCreate?: Array<CampusChatCreateOrConnectWithoutEduInstituteInput>;

    @Field(() => CampusChatCreateManyEduInstituteInputEnvelope, {nullable:true})
    @Type(() => CampusChatCreateManyEduInstituteInputEnvelope)
    createMany?: CampusChatCreateManyEduInstituteInputEnvelope;

    @Field(() => [CampusChatWhereUniqueInput], {nullable:true})
    @Type(() => CampusChatWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CampusChatWhereUniqueInput, 'id'>>;
}
