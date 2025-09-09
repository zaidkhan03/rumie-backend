import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AdType } from '../prisma/ad-type.enum';
import { AdVisibility } from '../prisma/ad-visibility.enum';
import { DateRange } from '../date-range/date-range.model';
import { Int } from '@nestjs/graphql';
import { EduInstituteSelectOption } from '../edu-institute-select-option/edu-institute-select-option.model';
import { Gender } from '../prisma/gender.enum';
import { Advertiser } from '../advertiser/advertiser.model';

@ObjectType()
export class Ad {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => AdType, {nullable:false})
    type!: `${AdType}`;

    @Field(() => [AdVisibility], {nullable:true})
    visibility!: Array<`${AdVisibility}`>;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => DateRange, {nullable:false})
    validity?: DateRange;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    advertiserName!: string | null;

    @Field(() => String, {nullable:false})
    advertiserId!: string;

    @Field(() => Int, {nullable:true})
    monthlyBudget!: number | null;

    @Field(() => [EduInstituteSelectOption], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOption>;

    @Field(() => Int, {nullable:false})
    priority!: number;

    @Field(() => [Gender], {nullable:true})
    targetGenders!: Array<`${Gender}`>;

    @Field(() => Advertiser, {nullable:false})
    advertiser?: Advertiser;
}
