import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumMessageActionTypeFieldUpdateOperationsInput } from '../prisma/enum-message-action-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class MessageActionUpdateInput {

    @Field(() => EnumMessageActionTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumMessageActionTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    label?: StringFieldUpdateOperationsInput;
}
