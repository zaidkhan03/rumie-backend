import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumAdTypeFieldUpdateOperationsInput } from '../prisma/enum-ad-type-field-update-operations.input';
import { AdUpdatevisibilityInput } from './ad-updatevisibility.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateRangeUpdateEnvelopeInput } from '../date-range/date-range-update-envelope.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { EduInstituteSelectOptionCreateInput } from '../edu-institute-select-option/edu-institute-select-option-create.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { AdUpdatetargetGendersInput } from './ad-updatetarget-genders.input';

@InputType()
export class AdUncheckedUpdateInput {

    @Field(() => EnumAdTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumAdTypeFieldUpdateOperationsInput;

    @Field(() => AdUpdatevisibilityInput, {nullable:true})
    visibility?: AdUpdatevisibilityInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => DateRangeUpdateEnvelopeInput, {nullable:true})
    validity?: DateRangeUpdateEnvelopeInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    advertiserName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    advertiserId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    monthlyBudget?: NullableIntFieldUpdateOperationsInput;

    @Field(() => [EduInstituteSelectOptionCreateInput], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOptionCreateInput>;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    priority?: IntFieldUpdateOperationsInput;

    @Field(() => AdUpdatetargetGendersInput, {nullable:true})
    targetGenders?: AdUpdatetargetGendersInput;
}
