import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PersonalDMWhereUniqueInput } from '../personal-dm/personal-dm-where-unique.input';
import { Type } from 'class-transformer';
import { PersonalDMCreateInput } from '../personal-dm/personal-dm-create.input';
import { PersonalDMUpdateInput } from '../personal-dm/personal-dm-update.input';

@ArgsType()
export class UpsertOnePersonalDmArgs {

    @Field(() => PersonalDMWhereUniqueInput, {nullable:false})
    @Type(() => PersonalDMWhereUniqueInput)
    where!: PersonalDMWhereUniqueInput;

    @Field(() => PersonalDMCreateInput, {nullable:false})
    @Type(() => PersonalDMCreateInput)
    create!: PersonalDMCreateInput;

    @Field(() => PersonalDMUpdateInput, {nullable:false})
    @Type(() => PersonalDMUpdateInput)
    update!: PersonalDMUpdateInput;
}
