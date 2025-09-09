import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteSelectOptionWhereInput } from './edu-institute-select-option-where.input';
import { Type } from 'class-transformer';
import { EduInstituteSelectOptionUpdateInput } from './edu-institute-select-option-update.input';

@InputType()
export class EduInstituteSelectOptionUpdateManyInput {

    @Field(() => EduInstituteSelectOptionWhereInput, {nullable:false})
    @Type(() => EduInstituteSelectOptionWhereInput)
    where!: EduInstituteSelectOptionWhereInput;

    @Field(() => EduInstituteSelectOptionUpdateInput, {nullable:false})
    @Type(() => EduInstituteSelectOptionUpdateInput)
    data!: EduInstituteSelectOptionUpdateInput;
}
