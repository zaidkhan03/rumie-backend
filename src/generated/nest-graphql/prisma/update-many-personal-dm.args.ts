import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PersonalDMUpdateManyMutationInput } from '../personal-dm/personal-dm-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PersonalDMWhereInput } from '../personal-dm/personal-dm-where.input';

@ArgsType()
export class UpdateManyPersonalDmArgs {

    @Field(() => PersonalDMUpdateManyMutationInput, {nullable:false})
    @Type(() => PersonalDMUpdateManyMutationInput)
    data!: PersonalDMUpdateManyMutationInput;

    @Field(() => PersonalDMWhereInput, {nullable:true})
    @Type(() => PersonalDMWhereInput)
    where?: PersonalDMWhereInput;
}
