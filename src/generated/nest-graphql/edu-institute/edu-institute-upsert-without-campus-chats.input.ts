import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteUpdateWithoutCampusChatsInput } from './edu-institute-update-without-campus-chats.input';
import { Type } from 'class-transformer';
import { EduInstituteCreateWithoutCampusChatsInput } from './edu-institute-create-without-campus-chats.input';
import { EduInstituteWhereInput } from './edu-institute-where.input';

@InputType()
export class EduInstituteUpsertWithoutCampusChatsInput {

    @Field(() => EduInstituteUpdateWithoutCampusChatsInput, {nullable:false})
    @Type(() => EduInstituteUpdateWithoutCampusChatsInput)
    update!: EduInstituteUpdateWithoutCampusChatsInput;

    @Field(() => EduInstituteCreateWithoutCampusChatsInput, {nullable:false})
    @Type(() => EduInstituteCreateWithoutCampusChatsInput)
    create!: EduInstituteCreateWithoutCampusChatsInput;

    @Field(() => EduInstituteWhereInput, {nullable:true})
    @Type(() => EduInstituteWhereInput)
    where?: EduInstituteWhereInput;
}
