import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PrivacyPolicyWhereInput } from './privacy-policy-where.input';
import { Type } from 'class-transformer';
import { PrivacyPolicyOrderByWithAggregationInput } from './privacy-policy-order-by-with-aggregation.input';
import { PrivacyPolicyScalarFieldEnum } from './privacy-policy-scalar-field.enum';
import { PrivacyPolicyScalarWhereWithAggregatesInput } from './privacy-policy-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PrivacyPolicyCountAggregateInput } from './privacy-policy-count-aggregate.input';
import { PrivacyPolicyMinAggregateInput } from './privacy-policy-min-aggregate.input';
import { PrivacyPolicyMaxAggregateInput } from './privacy-policy-max-aggregate.input';

@ArgsType()
export class PrivacyPolicyGroupByArgs {

    @Field(() => PrivacyPolicyWhereInput, {nullable:true})
    @Type(() => PrivacyPolicyWhereInput)
    where?: PrivacyPolicyWhereInput;

    @Field(() => [PrivacyPolicyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PrivacyPolicyOrderByWithAggregationInput>;

    @Field(() => [PrivacyPolicyScalarFieldEnum], {nullable:false})
    by!: Array<`${PrivacyPolicyScalarFieldEnum}`>;

    @Field(() => PrivacyPolicyScalarWhereWithAggregatesInput, {nullable:true})
    having?: PrivacyPolicyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PrivacyPolicyCountAggregateInput, {nullable:true})
    _count?: PrivacyPolicyCountAggregateInput;

    @Field(() => PrivacyPolicyMinAggregateInput, {nullable:true})
    _min?: PrivacyPolicyMinAggregateInput;

    @Field(() => PrivacyPolicyMaxAggregateInput, {nullable:true})
    _max?: PrivacyPolicyMaxAggregateInput;
}
