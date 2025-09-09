import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumAdTypeWithAggregatesFilter } from '../prisma/enum-ad-type-with-aggregates-filter.input';
import { EnumAdVisibilityNullableListFilter } from '../prisma/enum-ad-visibility-nullable-list-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumGenderNullableListFilter } from '../prisma/enum-gender-nullable-list-filter.input';

@InputType()
export class AdScalarWhereWithAggregatesInput {

    @Field(() => [AdScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AdScalarWhereWithAggregatesInput>;

    @Field(() => [AdScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AdScalarWhereWithAggregatesInput>;

    @Field(() => [AdScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AdScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumAdTypeWithAggregatesFilter, {nullable:true})
    type?: EnumAdTypeWithAggregatesFilter;

    @Field(() => EnumAdVisibilityNullableListFilter, {nullable:true})
    visibility?: EnumAdVisibilityNullableListFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    advertiserName?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    advertiserId?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    monthlyBudget?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    priority?: IntWithAggregatesFilter;

    @Field(() => EnumGenderNullableListFilter, {nullable:true})
    targetGenders?: EnumGenderNullableListFilter;
}
