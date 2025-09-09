import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdType } from '../prisma/ad-type.enum';
import { AdCreatevisibilityInput } from './ad-createvisibility.input';
import { DateRangeCreateEnvelopeInput } from '../date-range/date-range-create-envelope.input';
import { Int } from '@nestjs/graphql';
import { EduInstituteSelectOptionCreateInput } from '../edu-institute-select-option/edu-institute-select-option-create.input';
import { AdCreatetargetGendersInput } from './ad-createtarget-genders.input';

@InputType()
export class AdCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => AdType, {nullable:false})
    type!: `${AdType}`;

    @Field(() => AdCreatevisibilityInput, {nullable:true})
    visibility?: AdCreatevisibilityInput;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => DateRangeCreateEnvelopeInput, {nullable:false})
    validity!: DateRangeCreateEnvelopeInput;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    advertiserName?: string;

    @Field(() => String, {nullable:false})
    advertiserId!: string;

    @Field(() => Int, {nullable:true})
    monthlyBudget?: number;

    @Field(() => [EduInstituteSelectOptionCreateInput], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOptionCreateInput>;

    @Field(() => Int, {nullable:false})
    priority!: number;

    @Field(() => AdCreatetargetGendersInput, {nullable:true})
    targetGenders?: AdCreatetargetGendersInput;
}
