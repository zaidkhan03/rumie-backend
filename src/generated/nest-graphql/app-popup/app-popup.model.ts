import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EduSelectionListType } from '../prisma/edu-selection-list-type.enum';
import { EduInstituteSelectOption } from '../edu-institute-select-option/edu-institute-select-option.model';
import { AppPopupFilters } from '../app-popup-filters/app-popup-filters.model';
import { AppPopupTemplate } from '../prisma/app-popup-template.enum';
import { DateRange } from '../date-range/date-range.model';

@ObjectType()
export class AppPopup {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    frequency!: number;

    @Field(() => EduSelectionListType, {nullable:false})
    selectionListType!: `${EduSelectionListType}`;

    @Field(() => [EduInstituteSelectOption], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOption>;

    @Field(() => AppPopupFilters, {nullable:false})
    filters?: AppPopupFilters;

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

    @Field(() => String, {defaultValue:'',nullable:false})
    couponCode!: string;

    @Field(() => Int, {nullable:false})
    delayInSeconds!: number;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => DateRange, {nullable:false})
    validity?: DateRange;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
