import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppPopupWhereInput } from './app-popup-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumEduSelectionListTypeFilter } from '../prisma/enum-edu-selection-list-type-filter.input';
import { EduInstituteSelectOptionObjectEqualityInput } from '../prisma/edu-institute-select-option-object-equality.input';
import { AppPopupFiltersCompositeFilter } from './app-popup-filters-composite-filter.input';
import { EnumAppPopupTemplateFilter } from '../prisma/enum-app-popup-template-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateRangeCompositeFilter } from '../prisma/date-range-composite-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AppPopupWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [AppPopupWhereInput], {nullable:true})
    AND?: Array<AppPopupWhereInput>;

    @Field(() => [AppPopupWhereInput], {nullable:true})
    OR?: Array<AppPopupWhereInput>;

    @Field(() => [AppPopupWhereInput], {nullable:true})
    NOT?: Array<AppPopupWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    frequency?: IntFilter;

    @Field(() => EnumEduSelectionListTypeFilter, {nullable:true})
    selectionListType?: EnumEduSelectionListTypeFilter;

    @Field(() => [EduInstituteSelectOptionObjectEqualityInput], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOptionObjectEqualityInput>;

    @Field(() => AppPopupFiltersCompositeFilter, {nullable:true})
    filters?: AppPopupFiltersCompositeFilter;

    @Field(() => EnumAppPopupTemplateFilter, {nullable:true})
    template?: EnumAppPopupTemplateFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ctaUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ctaText?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    couponCode?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    delayInSeconds?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateRangeCompositeFilter, {nullable:true})
    validity?: DateRangeCompositeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
