import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PersonalDMUpdateInput } from '../personal-dm/personal-dm-update.input';
import { Type } from 'class-transformer';
import { PersonalDMWhereUniqueInput } from '../personal-dm/personal-dm-where-unique.input';

@ArgsType()
export class UpdateOnePersonalDmArgs {

    @Field(() => PersonalDMUpdateInput, {nullable:false})
    @Type(() => PersonalDMUpdateInput)
    data!: PersonalDMUpdateInput;

    @Field(() => PersonalDMWhereUniqueInput, {nullable:false})
    @Type(() => PersonalDMWhereUniqueInput)
    where!: PersonalDMWhereUniqueInput;
}
