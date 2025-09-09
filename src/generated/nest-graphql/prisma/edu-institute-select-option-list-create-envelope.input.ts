import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteSelectOptionCreateInput } from '../edu-institute-select-option/edu-institute-select-option-create.input';
import { Type } from 'class-transformer';

@InputType()
export class EduInstituteSelectOptionListCreateEnvelopeInput {

    @Field(() => [EduInstituteSelectOptionCreateInput], {nullable:true})
    @Type(() => EduInstituteSelectOptionCreateInput)
    set?: Array<EduInstituteSelectOptionCreateInput>;
}
