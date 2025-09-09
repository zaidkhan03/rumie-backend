import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EduInstituteSelectOptionCreateInput {

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => String, {nullable:false})
    value!: string;
}
