import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumSystemNotificationTypeFieldUpdateOperationsInput } from '../prisma/enum-system-notification-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class SystemNotificationPayloadUpdateInput {

    @Field(() => EnumSystemNotificationTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumSystemNotificationTypeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    conversationId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    payoutID?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userID?: NullableStringFieldUpdateOperationsInput;
}
