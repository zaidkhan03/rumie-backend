import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatCreateManyEduInstituteInput } from './campus-chat-create-many-edu-institute.input';
import { Type } from 'class-transformer';

@InputType()
export class CampusChatCreateManyEduInstituteInputEnvelope {

    @Field(() => [CampusChatCreateManyEduInstituteInput], {nullable:false})
    @Type(() => CampusChatCreateManyEduInstituteInput)
    data!: Array<CampusChatCreateManyEduInstituteInput>;
}
