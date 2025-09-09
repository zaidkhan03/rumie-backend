import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PersonalDMWhereInput } from '../personal-dm/personal-dm-where.input';
import { Type } from 'class-transformer';
import { PersonalDMOrderByWithAggregationInput } from '../personal-dm/personal-dm-order-by-with-aggregation.input';
import { PersonalDMScalarFieldEnum } from '../personal-dm/personal-dm-scalar-field.enum';
import { PersonalDMScalarWhereWithAggregatesInput } from '../personal-dm/personal-dm-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByPersonalDmArgs {

    @Field(() => PersonalDMWhereInput, {nullable:true})
    @Type(() => PersonalDMWhereInput)
    where?: PersonalDMWhereInput;

    @Field(() => [PersonalDMOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PersonalDMOrderByWithAggregationInput>;

    @Field(() => [PersonalDMScalarFieldEnum], {nullable:false})
    by!: Array<`${PersonalDMScalarFieldEnum}`>;

    @Field(() => PersonalDMScalarWhereWithAggregatesInput, {nullable:true})
    having?: PersonalDMScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
