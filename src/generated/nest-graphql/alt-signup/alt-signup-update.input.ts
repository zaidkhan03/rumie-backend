import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumAltSignupStatusFieldUpdateOperationsInput } from '../prisma/enum-alt-signup-status-field-update-operations.input';

@InputType()
export class AltSignupUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idProof?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    uploadedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tempEmailAllotted?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emailClaimed?: StringFieldUpdateOperationsInput;

    @Field(() => EnumAltSignupStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumAltSignupStatusFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    remarks?: StringFieldUpdateOperationsInput;
}
