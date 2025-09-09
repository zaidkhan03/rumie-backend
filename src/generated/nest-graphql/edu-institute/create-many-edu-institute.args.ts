import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EduInstituteCreateManyInput } from './edu-institute-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEduInstituteArgs {

    @Field(() => [EduInstituteCreateManyInput], {nullable:false})
    @Type(() => EduInstituteCreateManyInput)
    data!: Array<EduInstituteCreateManyInput>;
}
