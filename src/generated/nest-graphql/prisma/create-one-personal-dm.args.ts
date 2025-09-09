import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PersonalDMCreateInput } from '../personal-dm/personal-dm-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePersonalDmArgs {

    @Field(() => PersonalDMCreateInput, {nullable:false})
    @Type(() => PersonalDMCreateInput)
    data!: PersonalDMCreateInput;
}
