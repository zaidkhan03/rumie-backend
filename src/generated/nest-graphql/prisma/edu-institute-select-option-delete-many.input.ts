import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteSelectOptionWhereInput } from '../edu-institute-select-option/edu-institute-select-option-where.input';
import { Type } from 'class-transformer';

@InputType()
export class EduInstituteSelectOptionDeleteManyInput {

    @Field(() => EduInstituteSelectOptionWhereInput, {nullable:false})
    @Type(() => EduInstituteSelectOptionWhereInput)
    where!: EduInstituteSelectOptionWhereInput;
}
