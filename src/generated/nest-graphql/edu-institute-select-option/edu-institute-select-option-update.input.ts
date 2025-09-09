import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class EduInstituteSelectOptionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    label?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    value?: StringFieldUpdateOperationsInput;
}
