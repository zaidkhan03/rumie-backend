import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteWhereInput } from './edu-institute-where.input';
import { Type } from 'class-transformer';
import { EduInstituteUpdateWithoutCampusChatsInput } from './edu-institute-update-without-campus-chats.input';

@InputType()
export class EduInstituteUpdateToOneWithWhereWithoutCampusChatsInput {

    @Field(() => EduInstituteWhereInput, {nullable:true})
    @Type(() => EduInstituteWhereInput)
    where?: EduInstituteWhereInput;

    @Field(() => EduInstituteUpdateWithoutCampusChatsInput, {nullable:false})
    @Type(() => EduInstituteUpdateWithoutCampusChatsInput)
    data!: EduInstituteUpdateWithoutCampusChatsInput;
}
