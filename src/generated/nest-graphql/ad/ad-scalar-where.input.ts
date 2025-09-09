import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumAdTypeFilter } from '../prisma/enum-ad-type-filter.input';
import { EnumAdVisibilityNullableListFilter } from '../prisma/enum-ad-visibility-nullable-list-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumGenderNullableListFilter } from '../prisma/enum-gender-nullable-list-filter.input';

@InputType()
export class AdScalarWhereInput {

    @Field(() => [AdScalarWhereInput], {nullable:true})
    AND?: Array<AdScalarWhereInput>;

    @Field(() => [AdScalarWhereInput], {nullable:true})
    OR?: Array<AdScalarWhereInput>;

    @Field(() => [AdScalarWhereInput], {nullable:true})
    NOT?: Array<AdScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumAdTypeFilter, {nullable:true})
    type?: EnumAdTypeFilter;

    @Field(() => EnumAdVisibilityNullableListFilter, {nullable:true})
    visibility?: EnumAdVisibilityNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    advertiserName?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    advertiserId?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    monthlyBudget?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    priority?: IntFilter;

    @Field(() => EnumGenderNullableListFilter, {nullable:true})
    targetGenders?: EnumGenderNullableListFilter;
}
