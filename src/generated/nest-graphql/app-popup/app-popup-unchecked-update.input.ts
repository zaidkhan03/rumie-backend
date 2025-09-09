import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumEduSelectionListTypeFieldUpdateOperationsInput } from '../prisma/enum-edu-selection-list-type-field-update-operations.input';
import { EduInstituteSelectOptionCreateInput } from '../edu-institute-select-option/edu-institute-select-option-create.input';
import { AppPopupFiltersUpdateEnvelopeInput } from './app-popup-filters-update-envelope.input';
import { EnumAppPopupTemplateFieldUpdateOperationsInput } from '../prisma/enum-app-popup-template-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateRangeUpdateEnvelopeInput } from '../date-range/date-range-update-envelope.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class AppPopupUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    frequency?: IntFieldUpdateOperationsInput;

    @Field(() => EnumEduSelectionListTypeFieldUpdateOperationsInput, {nullable:true})
    selectionListType?: EnumEduSelectionListTypeFieldUpdateOperationsInput;

    @Field(() => [EduInstituteSelectOptionCreateInput], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOptionCreateInput>;

    @Field(() => AppPopupFiltersUpdateEnvelopeInput, {nullable:true})
    filters?: AppPopupFiltersUpdateEnvelopeInput;

    @Field(() => EnumAppPopupTemplateFieldUpdateOperationsInput, {nullable:true})
    template?: EnumAppPopupTemplateFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ctaUrl?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ctaText?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    couponCode?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    delayInSeconds?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateRangeUpdateEnvelopeInput, {nullable:true})
    validity?: DateRangeUpdateEnvelopeInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
