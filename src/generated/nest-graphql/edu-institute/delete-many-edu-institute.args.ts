import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EduInstituteWhereInput } from './edu-institute-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyEduInstituteArgs {

    @Field(() => EduInstituteWhereInput, {nullable:true})
    @Type(() => EduInstituteWhereInput)
    where?: EduInstituteWhereInput;
}
