import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumReactionTypeFieldUpdateOperationsInput } from '../prisma/enum-reaction-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CampusChatReactionUpdateInput {

    @Field(() => EnumReactionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumReactionTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
