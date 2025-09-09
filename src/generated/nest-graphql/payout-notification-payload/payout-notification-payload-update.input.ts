import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumPayoutNotificationTypeFieldUpdateOperationsInput } from '../prisma/enum-payout-notification-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class PayoutNotificationPayloadUpdateInput {

    @Field(() => EnumPayoutNotificationTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumPayoutNotificationTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    conversationId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    orderId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    payoutID?: StringFieldUpdateOperationsInput;
}
