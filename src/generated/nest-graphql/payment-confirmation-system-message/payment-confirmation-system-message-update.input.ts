import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumSystemIconsFieldUpdateOperationsInput } from '../prisma/enum-system-icons-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableEnumConversationTypeFieldUpdateOperationsInput } from '../prisma/nullable-enum-conversation-type-field-update-operations.input';

@InputType()
export class PaymentConfirmationSystemMessageUpdateInput {

    @Field(() => EnumSystemIconsFieldUpdateOperationsInput, {nullable:true})
    icon?: EnumSystemIconsFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text1?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text2?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    shippingAddress?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    note?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    orderId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    localTxn?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableEnumConversationTypeFieldUpdateOperationsInput, {nullable:true})
    conversationType?: NullableEnumConversationTypeFieldUpdateOperationsInput;
}
