import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumCampusChatReportReasonFieldUpdateOperationsInput } from '../prisma/enum-campus-chat-report-reason-field-update-operations.input';
import { CampusChatReportStatusUpdateEnvelopeInput } from '../campus-chat-report-status/campus-chat-report-status-update-envelope.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CampusChatReportUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    messageId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    commentId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    reporterId?: StringFieldUpdateOperationsInput;

    @Field(() => EnumCampusChatReportReasonFieldUpdateOperationsInput, {nullable:true})
    reason?: EnumCampusChatReportReasonFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    details?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CampusChatReportStatusUpdateEnvelopeInput, {nullable:true})
    status?: CampusChatReportStatusUpdateEnvelopeInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
