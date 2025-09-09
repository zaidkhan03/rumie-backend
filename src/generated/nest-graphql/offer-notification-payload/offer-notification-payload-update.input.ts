import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumOfferNotificationTypeFieldUpdateOperationsInput } from '../prisma/enum-offer-notification-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class OfferNotificationPayloadUpdateInput {

    @Field(() => EnumOfferNotificationTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumOfferNotificationTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    conversationId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    otherParticipantFullName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    otherParticipantUserId?: StringFieldUpdateOperationsInput;
}
