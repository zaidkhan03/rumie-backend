import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteWhereInput } from './edu-institute-where.input';

@InputType()
export class EduInstituteNullableRelationFilter {

    @Field(() => EduInstituteWhereInput, {nullable:true})
    is?: EduInstituteWhereInput;

    @Field(() => EduInstituteWhereInput, {nullable:true})
    isNot?: EduInstituteWhereInput;
}
