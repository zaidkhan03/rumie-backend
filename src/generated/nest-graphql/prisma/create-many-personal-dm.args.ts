import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PersonalDMCreateManyInput } from '../personal-dm/personal-dm-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPersonalDmArgs {

    @Field(() => [PersonalDMCreateManyInput], {nullable:false})
    @Type(() => PersonalDMCreateManyInput)
    data!: Array<PersonalDMCreateManyInput>;
}
