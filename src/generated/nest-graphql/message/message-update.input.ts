import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumMessageTypeFieldUpdateOperationsInput } from '../prisma/enum-message-type-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { MessageActionsNullableUpdateEnvelopeInput } from '../prisma/message-actions-nullable-update-envelope.input';
import { NullableEnumMessageStateFieldUpdateOperationsInput } from '../prisma/nullable-enum-message-state-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class MessageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    clientId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    senderId?: StringFieldUpdateOperationsInput;

    @Field(() => EnumMessageTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumMessageTypeFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    payload?: any;

    @Field(() => MessageActionsNullableUpdateEnvelopeInput, {nullable:true})
    actions?: MessageActionsNullableUpdateEnvelopeInput;

    @Field(() => NullableEnumMessageStateFieldUpdateOperationsInput, {nullable:true})
    state?: NullableEnumMessageStateFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    conversationId?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
