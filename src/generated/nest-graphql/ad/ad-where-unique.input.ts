import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdWhereInput } from './ad-where.input';
import { EnumAdTypeFilter } from '../prisma/enum-ad-type-filter.input';
import { EnumAdVisibilityNullableListFilter } from '../prisma/enum-ad-visibility-nullable-list-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateRangeCompositeFilter } from '../prisma/date-range-composite-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EduInstituteSelectOptionObjectEqualityInput } from '../prisma/edu-institute-select-option-object-equality.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumGenderNullableListFilter } from '../prisma/enum-gender-nullable-list-filter.input';
import { AdvertiserRelationFilter } from '../advertiser/advertiser-relation-filter.input';

@InputType()
export class AdWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [AdWhereInput], {nullable:true})
    AND?: Array<AdWhereInput>;

    @Field(() => [AdWhereInput], {nullable:true})
    OR?: Array<AdWhereInput>;

    @Field(() => [AdWhereInput], {nullable:true})
    NOT?: Array<AdWhereInput>;

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

    @Field(() => DateRangeCompositeFilter, {nullable:true})
    validity?: DateRangeCompositeFilter;

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

    @Field(() => [EduInstituteSelectOptionObjectEqualityInput], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOptionObjectEqualityInput>;

    @Field(() => IntFilter, {nullable:true})
    priority?: IntFilter;

    @Field(() => EnumGenderNullableListFilter, {nullable:true})
    targetGenders?: EnumGenderNullableListFilter;

    @Field(() => AdvertiserRelationFilter, {nullable:true})
    advertiser?: AdvertiserRelationFilter;
}
