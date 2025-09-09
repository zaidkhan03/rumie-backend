import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteWhereInput } from './edu-institute-where.input';
import { Type } from 'class-transformer';
import { EduInstituteUpdateWithoutStudentsInput } from './edu-institute-update-without-students.input';

@InputType()
export class EduInstituteUpdateToOneWithWhereWithoutStudentsInput {

    @Field(() => EduInstituteWhereInput, {nullable:true})
    @Type(() => EduInstituteWhereInput)
    where?: EduInstituteWhereInput;

    @Field(() => EduInstituteUpdateWithoutStudentsInput, {nullable:false})
    @Type(() => EduInstituteUpdateWithoutStudentsInput)
    data!: EduInstituteUpdateWithoutStudentsInput;
}
