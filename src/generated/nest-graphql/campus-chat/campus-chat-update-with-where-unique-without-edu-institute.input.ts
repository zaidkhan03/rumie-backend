import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CampusChatWhereUniqueInput } from './campus-chat-where-unique.input';
import { Type } from 'class-transformer';
import { CampusChatUpdateWithoutEduInstituteInput } from './campus-chat-update-without-edu-institute.input';

@InputType()
export class CampusChatUpdateWithWhereUniqueWithoutEduInstituteInput {

    @Field(() => CampusChatWhereUniqueInput, {nullable:false})
    @Type(() => CampusChatWhereUniqueInput)
    where!: Prisma.AtLeast<CampusChatWhereUniqueInput, 'id'>;

    @Field(() => CampusChatUpdateWithoutEduInstituteInput, {nullable:false})
    @Type(() => CampusChatUpdateWithoutEduInstituteInput)
    data!: CampusChatUpdateWithoutEduInstituteInput;
}
