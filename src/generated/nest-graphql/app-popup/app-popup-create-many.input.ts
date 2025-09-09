import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EduSelectionListType } from '../prisma/edu-selection-list-type.enum';
import { EduInstituteSelectOptionCreateInput } from '../edu-institute-select-option/edu-institute-select-option-create.input';
import { AppPopupFiltersCreateEnvelopeInput } from './app-popup-filters-create-envelope.input';
import { AppPopupTemplate } from '../prisma/app-popup-template.enum';
import { DateRangeCreateEnvelopeInput } from '../date-range/date-range-create-envelope.input';

@InputType()
export class AppPopupCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    frequency!: number;

    @Field(() => EduSelectionListType, {nullable:false})
    selectionListType!: `${EduSelectionListType}`;

    @Field(() => [EduInstituteSelectOptionCreateInput], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOptionCreateInput>;

    @Field(() => AppPopupFiltersCreateEnvelopeInput, {nullable:false})
    filters!: AppPopupFiltersCreateEnvelopeInput;

    @Field(() => AppPopupTemplate, {nullable:false})
    template!: `${AppPopupTemplate}`;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    ctaUrl!: string;

    @Field(() => String, {nullable:false})
    ctaText!: string;

    @Field(() => String, {nullable:true})
    couponCode?: string;

    @Field(() => Int, {nullable:false})
    delayInSeconds!: number;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => DateRangeCreateEnvelopeInput, {nullable:false})
    validity!: DateRangeCreateEnvelopeInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
