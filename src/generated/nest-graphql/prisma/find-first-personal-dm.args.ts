import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PersonalDMWhereInput } from '../personal-dm/personal-dm-where.input';
import { Type } from 'class-transformer';
import { PersonalDMOrderByWithRelationInput } from '../personal-dm/personal-dm-order-by-with-relation.input';
import { PersonalDMWhereUniqueInput } from '../personal-dm/personal-dm-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PersonalDMScalarFieldEnum } from '../personal-dm/personal-dm-scalar-field.enum';

@ArgsType()
export class FindFirstPersonalDmArgs {

    @Field(() => PersonalDMWhereInput, {nullable:true})
    @Type(() => PersonalDMWhereInput)
    where?: PersonalDMWhereInput;

    @Field(() => [PersonalDMOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PersonalDMOrderByWithRelationInput>;

    @Field(() => PersonalDMWhereUniqueInput, {nullable:true})
    cursor?: PersonalDMWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PersonalDMScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PersonalDMScalarFieldEnum}`>;
}
