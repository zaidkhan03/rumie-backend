import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumSystemIconsFieldUpdateOperationsInput } from '../prisma/enum-system-icons-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class InfoSystemMessageUpdateInput {

    @Field(() => EnumSystemIconsFieldUpdateOperationsInput, {nullable:true})
    icon?: EnumSystemIconsFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text1?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text2?: StringFieldUpdateOperationsInput;
}
