import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumRentalNotificationTypeFieldUpdateOperationsInput } from '../prisma/enum-rental-notification-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class RentalNotificationPayloadUpdateInput {

    @Field(() => EnumRentalNotificationTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumRentalNotificationTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    conversationId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    orderId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    listingTitle?: StringFieldUpdateOperationsInput;
}
