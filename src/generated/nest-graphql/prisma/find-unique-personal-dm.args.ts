import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PersonalDMWhereUniqueInput } from '../personal-dm/personal-dm-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePersonalDmArgs {

    @Field(() => PersonalDMWhereUniqueInput, {nullable:false})
    @Type(() => PersonalDMWhereUniqueInput)
    where!: PersonalDMWhereUniqueInput;
}
