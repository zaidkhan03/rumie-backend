import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EduInstituteCreateInput } from './edu-institute-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEduInstituteArgs {

    @Field(() => EduInstituteCreateInput, {nullable:false})
    @Type(() => EduInstituteCreateInput)
    data!: EduInstituteCreateInput;
}
