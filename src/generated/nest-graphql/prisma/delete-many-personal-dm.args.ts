import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PersonalDMWhereInput } from '../personal-dm/personal-dm-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPersonalDmArgs {

    @Field(() => PersonalDMWhereInput, {nullable:true})
    @Type(() => PersonalDMWhereInput)
    where?: PersonalDMWhereInput;
}
