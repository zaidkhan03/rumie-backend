import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class EduInstituteSelectOptionWhereInput {

    @Field(() => [EduInstituteSelectOptionWhereInput], {nullable:true})
    AND?: Array<EduInstituteSelectOptionWhereInput>;

    @Field(() => [EduInstituteSelectOptionWhereInput], {nullable:true})
    OR?: Array<EduInstituteSelectOptionWhereInput>;

    @Field(() => [EduInstituteSelectOptionWhereInput], {nullable:true})
    NOT?: Array<EduInstituteSelectOptionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    label?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;
}
