import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumCampusChatReportActionFieldUpdateOperationsInput } from '../prisma/nullable-enum-campus-chat-report-action-field-update-operations.input';

@InputType()
export class CampusChatReportStatusUpdateInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    reviewed?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reviewedBy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumCampusChatReportActionFieldUpdateOperationsInput, {nullable:true})
    action?: NullableEnumCampusChatReportActionFieldUpdateOperationsInput;
}
