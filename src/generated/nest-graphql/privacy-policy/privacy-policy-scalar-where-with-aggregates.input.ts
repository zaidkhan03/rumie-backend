import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PrivacyPolicyScalarWhereWithAggregatesInput {

    @Field(() => [PrivacyPolicyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PrivacyPolicyScalarWhereWithAggregatesInput>;

    @Field(() => [PrivacyPolicyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PrivacyPolicyScalarWhereWithAggregatesInput>;

    @Field(() => [PrivacyPolicyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PrivacyPolicyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    question?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    answer?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
