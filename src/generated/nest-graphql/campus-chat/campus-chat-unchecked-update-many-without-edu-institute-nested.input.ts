import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatCreateWithoutEduInstituteInput } from './campus-chat-create-without-edu-institute.input';
import { Type } from 'class-transformer';
import { CampusChatCreateOrConnectWithoutEduInstituteInput } from './campus-chat-create-or-connect-without-edu-institute.input';
import { CampusChatUpsertWithWhereUniqueWithoutEduInstituteInput } from './campus-chat-upsert-with-where-unique-without-edu-institute.input';
import { CampusChatCreateManyEduInstituteInputEnvelope } from './campus-chat-create-many-edu-institute-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CampusChatWhereUniqueInput } from './campus-chat-where-unique.input';
import { CampusChatUpdateWithWhereUniqueWithoutEduInstituteInput } from './campus-chat-update-with-where-unique-without-edu-institute.input';
import { CampusChatUpdateManyWithWhereWithoutEduInstituteInput } from './campus-chat-update-many-with-where-without-edu-institute.input';
import { CampusChatScalarWhereInput } from './campus-chat-scalar-where.input';

@InputType()
export class CampusChatUncheckedUpdateManyWithoutEduInstituteNestedInput {

    @Field(() => [CampusChatCreateWithoutEduInstituteInput], {nullable:true})
    @Type(() => CampusChatCreateWithoutEduInstituteInput)
    create?: Array<CampusChatCreateWithoutEduInstituteInput>;

    @Field(() => [CampusChatCreateOrConnectWithoutEduInstituteInput], {nullable:true})
    @Type(() => CampusChatCreateOrConnectWithoutEduInstituteInput)
    connectOrCreate?: Array<CampusChatCreateOrConnectWithoutEduInstituteInput>;

    @Field(() => [CampusChatUpsertWithWhereUniqueWithoutEduInstituteInput], {nullable:true})
    @Type(() => CampusChatUpsertWithWhereUniqueWithoutEduInstituteInput)
    upsert?: Array<CampusChatUpsertWithWhereUniqueWithoutEduInstituteInput>;

    @Field(() => CampusChatCreateManyEduInstituteInputEnvelope, {nullable:true})
    @Type(() => CampusChatCreateManyEduInstituteInputEnvelope)
    createMany?: CampusChatCreateManyEduInstituteInputEnvelope;

    @Field(() => [CampusChatWhereUniqueInput], {nullable:true})
    @Type(() => CampusChatWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CampusChatWhereUniqueInput, 'id'>>;

    @Field(() => [CampusChatWhereUniqueInput], {nullable:true})
    @Type(() => CampusChatWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CampusChatWhereUniqueInput, 'id'>>;

    @Field(() => [CampusChatWhereUniqueInput], {nullable:true})
    @Type(() => CampusChatWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CampusChatWhereUniqueInput, 'id'>>;

    @Field(() => [CampusChatWhereUniqueInput], {nullable:true})
    @Type(() => CampusChatWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CampusChatWhereUniqueInput, 'id'>>;

    @Field(() => [CampusChatUpdateWithWhereUniqueWithoutEduInstituteInput], {nullable:true})
    @Type(() => CampusChatUpdateWithWhereUniqueWithoutEduInstituteInput)
    update?: Array<CampusChatUpdateWithWhereUniqueWithoutEduInstituteInput>;

    @Field(() => [CampusChatUpdateManyWithWhereWithoutEduInstituteInput], {nullable:true})
    @Type(() => CampusChatUpdateManyWithWhereWithoutEduInstituteInput)
    updateMany?: Array<CampusChatUpdateManyWithWhereWithoutEduInstituteInput>;

    @Field(() => [CampusChatScalarWhereInput], {nullable:true})
    @Type(() => CampusChatScalarWhereInput)
    deleteMany?: Array<CampusChatScalarWhereInput>;
}
