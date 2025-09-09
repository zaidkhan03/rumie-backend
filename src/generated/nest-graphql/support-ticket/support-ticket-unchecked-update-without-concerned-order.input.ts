import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumSupportTicketTypeFieldUpdateOperationsInput } from '../prisma/enum-support-ticket-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { SupportMessageCreateInput } from '../support-message/support-message-create.input';
import { EnumSupportTicketParticipantFieldUpdateOperationsInput } from '../prisma/enum-support-ticket-participant-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class SupportTicketUncheckedUpdateWithoutConcernedOrderInput {

    @Field(() => EnumSupportTicketTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumSupportTicketTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    issue?: StringFieldUpdateOperationsInput;

    @Field(() => [SupportMessageCreateInput], {nullable:true})
    messages?: Array<SupportMessageCreateInput>;

    @Field(() => EnumSupportTicketParticipantFieldUpdateOperationsInput, {nullable:true})
    initiator?: EnumSupportTicketParticipantFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    associatedUserId?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    resolved?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userLastSeen?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    adminLastSeen?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
