import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteSelectOptionCreateInput } from '../edu-institute-select-option/edu-institute-select-option-create.input';
import { Type } from 'class-transformer';
import { EduInstituteSelectOptionUpdateManyInput } from '../edu-institute-select-option/edu-institute-select-option-update-many.input';
import { EduInstituteSelectOptionDeleteManyInput } from './edu-institute-select-option-delete-many.input';

@InputType()
export class EduInstituteSelectOptionListUpdateEnvelopeInput {

    @Field(() => [EduInstituteSelectOptionCreateInput], {nullable:true})
    @Type(() => EduInstituteSelectOptionCreateInput)
    set?: Array<EduInstituteSelectOptionCreateInput>;

    @Field(() => [EduInstituteSelectOptionCreateInput], {nullable:true})
    push?: Array<EduInstituteSelectOptionCreateInput>;

    @Field(() => EduInstituteSelectOptionUpdateManyInput, {nullable:true})
    @Type(() => EduInstituteSelectOptionUpdateManyInput)
    updateMany?: EduInstituteSelectOptionUpdateManyInput;

    @Field(() => EduInstituteSelectOptionDeleteManyInput, {nullable:true})
    @Type(() => EduInstituteSelectOptionDeleteManyInput)
    deleteMany?: EduInstituteSelectOptionDeleteManyInput;
}
