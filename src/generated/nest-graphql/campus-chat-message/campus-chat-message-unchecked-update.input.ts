import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumCampusChatMessageTypeFieldUpdateOperationsInput } from '../prisma/enum-campus-chat-message-type-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { CampusChatCommentCreateInput } from '../campus-chat-comment/campus-chat-comment-create.input';
import { CampusChatReactionCreateInput } from '../campus-chat-reaction/campus-chat-reaction-create.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableEnumCampusChatMessageFlaggedByFieldUpdateOperationsInput } from '../prisma/nullable-enum-campus-chat-message-flagged-by-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CampusChatMessageUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    chatId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    clientId?: StringFieldUpdateOperationsInput;

    @Field(() => EnumCampusChatMessageTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumCampusChatMessageTypeFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    content?: any;

    @Field(() => [CampusChatCommentCreateInput], {nullable:true})
    comments?: Array<CampusChatCommentCreateInput>;

    @Field(() => [CampusChatReactionCreateInput], {nullable:true})
    reactions?: Array<CampusChatReactionCreateInput>;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    reportCount?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    flagged?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    flaggedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableEnumCampusChatMessageFlaggedByFieldUpdateOperationsInput, {nullable:true})
    flaggedBy?: NullableEnumCampusChatMessageFlaggedByFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
