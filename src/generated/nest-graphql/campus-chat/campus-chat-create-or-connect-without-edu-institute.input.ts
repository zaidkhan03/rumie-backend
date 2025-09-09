import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CampusChatWhereUniqueInput } from './campus-chat-where-unique.input';
import { Type } from 'class-transformer';
import { CampusChatCreateWithoutEduInstituteInput } from './campus-chat-create-without-edu-institute.input';

@InputType()
export class CampusChatCreateOrConnectWithoutEduInstituteInput {

    @Field(() => CampusChatWhereUniqueInput, {nullable:false})
    @Type(() => CampusChatWhereUniqueInput)
    where!: Prisma.AtLeast<CampusChatWhereUniqueInput, 'id'>;

    @Field(() => CampusChatCreateWithoutEduInstituteInput, {nullable:false})
    @Type(() => CampusChatCreateWithoutEduInstituteInput)
    create!: CampusChatCreateWithoutEduInstituteInput;
}
