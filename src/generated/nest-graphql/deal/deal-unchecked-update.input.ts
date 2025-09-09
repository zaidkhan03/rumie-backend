import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EduInstituteSelectOptionCreateInput } from '../edu-institute-select-option/edu-institute-select-option-create.input';
import { DealBusinessDetailsUpdateEnvelopeInput } from '../deal-business-details/deal-business-details-update-envelope.input';
import { DealTextContentUpdateEnvelopeInput } from '../deal-text-content/deal-text-content-update-envelope.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumDealTypeFieldUpdateOperationsInput } from '../prisma/enum-deal-type-field-update-operations.input';
import { DateRangeUpdateEnvelopeInput } from '../date-range/date-range-update-envelope.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DealUpdatesavedUserIdsInput } from './deal-updatesaved-user-ids.input';
import { UserUncheckedUpdateManyWithoutSavedDealsNestedInput } from '../user/user-unchecked-update-many-without-saved-deals-nested.input';

@InputType()
export class DealUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: StringFieldUpdateOperationsInput;

    @Field(() => [EduInstituteSelectOptionCreateInput], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOptionCreateInput>;

    @Field(() => DealBusinessDetailsUpdateEnvelopeInput, {nullable:true})
    business?: DealBusinessDetailsUpdateEnvelopeInput;

    @Field(() => DealTextContentUpdateEnvelopeInput, {nullable:true})
    content?: DealTextContentUpdateEnvelopeInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    url?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumDealTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumDealTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    couponCode?: StringFieldUpdateOperationsInput;

    @Field(() => DateRangeUpdateEnvelopeInput, {nullable:true})
    validity?: DateRangeUpdateEnvelopeInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DealUpdatesavedUserIdsInput, {nullable:true})
    savedUserIds?: DealUpdatesavedUserIdsInput;

    @Field(() => UserUncheckedUpdateManyWithoutSavedDealsNestedInput, {nullable:true})
    savedUsers?: UserUncheckedUpdateManyWithoutSavedDealsNestedInput;
}
