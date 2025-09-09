import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EduInstituteUpdateManyMutationInput } from './edu-institute-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EduInstituteWhereInput } from './edu-institute-where.input';

@ArgsType()
export class UpdateManyEduInstituteArgs {

    @Field(() => EduInstituteUpdateManyMutationInput, {nullable:false})
    @Type(() => EduInstituteUpdateManyMutationInput)
    data!: EduInstituteUpdateManyMutationInput;

    @Field(() => EduInstituteWhereInput, {nullable:true})
    @Type(() => EduInstituteWhereInput)
    where?: EduInstituteWhereInput;
}
