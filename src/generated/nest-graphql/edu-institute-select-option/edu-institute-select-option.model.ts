import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EduInstituteSelectOption {

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => String, {nullable:false})
    value!: string;
}
