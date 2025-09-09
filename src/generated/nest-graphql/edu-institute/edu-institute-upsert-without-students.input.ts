import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteUpdateWithoutStudentsInput } from './edu-institute-update-without-students.input';
import { Type } from 'class-transformer';
import { EduInstituteCreateWithoutStudentsInput } from './edu-institute-create-without-students.input';
import { EduInstituteWhereInput } from './edu-institute-where.input';

@InputType()
export class EduInstituteUpsertWithoutStudentsInput {

    @Field(() => EduInstituteUpdateWithoutStudentsInput, {nullable:false})
    @Type(() => EduInstituteUpdateWithoutStudentsInput)
    update!: EduInstituteUpdateWithoutStudentsInput;

    @Field(() => EduInstituteCreateWithoutStudentsInput, {nullable:false})
    @Type(() => EduInstituteCreateWithoutStudentsInput)
    create!: EduInstituteCreateWithoutStudentsInput;

    @Field(() => EduInstituteWhereInput, {nullable:true})
    @Type(() => EduInstituteWhereInput)
    where?: EduInstituteWhereInput;
}
