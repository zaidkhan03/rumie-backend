import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumEduSelectionListTypeWithAggregatesFilter } from '../prisma/enum-edu-selection-list-type-with-aggregates-filter.input';
import { EnumAppPopupTemplateWithAggregatesFilter } from '../prisma/enum-app-popup-template-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AppPopupScalarWhereWithAggregatesInput {

    @Field(() => [AppPopupScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AppPopupScalarWhereWithAggregatesInput>;

    @Field(() => [AppPopupScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AppPopupScalarWhereWithAggregatesInput>;

    @Field(() => [AppPopupScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AppPopupScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    frequency?: IntWithAggregatesFilter;

    @Field(() => EnumEduSelectionListTypeWithAggregatesFilter, {nullable:true})
    selectionListType?: EnumEduSelectionListTypeWithAggregatesFilter;

    @Field(() => EnumAppPopupTemplateWithAggregatesFilter, {nullable:true})
    template?: EnumAppPopupTemplateWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ctaUrl?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ctaText?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    couponCode?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    delayInSeconds?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
