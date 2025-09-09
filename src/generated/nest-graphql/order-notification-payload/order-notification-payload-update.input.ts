import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumOrderNotificationTypeFieldUpdateOperationsInput } from '../prisma/enum-order-notification-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class OrderNotificationPayloadUpdateInput {

    @Field(() => EnumOrderNotificationTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumOrderNotificationTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    conversationId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    orderId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    listingTitle?: StringFieldUpdateOperationsInput;
}
