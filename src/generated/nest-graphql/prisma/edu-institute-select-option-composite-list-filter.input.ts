import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteSelectOptionObjectEqualityInput } from './edu-institute-select-option-object-equality.input';
import { EduInstituteSelectOptionWhereInput } from '../edu-institute-select-option/edu-institute-select-option-where.input';

@InputType()
export class EduInstituteSelectOptionCompositeListFilter {

    @Field(() => [EduInstituteSelectOptionObjectEqualityInput], {nullable:true})
    equals?: Array<EduInstituteSelectOptionObjectEqualityInput>;

    @Field(() => EduInstituteSelectOptionWhereInput, {nullable:true})
    every?: EduInstituteSelectOptionWhereInput;

    @Field(() => EduInstituteSelectOptionWhereInput, {nullable:true})
    some?: EduInstituteSelectOptionWhereInput;

    @Field(() => EduInstituteSelectOptionWhereInput, {nullable:true})
    none?: EduInstituteSelectOptionWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
