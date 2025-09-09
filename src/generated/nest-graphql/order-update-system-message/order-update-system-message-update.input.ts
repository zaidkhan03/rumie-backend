import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumSystemIconsFieldUpdateOperationsInput } from '../prisma/enum-system-icons-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class OrderUpdateSystemMessageUpdateInput {

    @Field(() => EnumSystemIconsFieldUpdateOperationsInput, {nullable:true})
    icon1?: EnumSystemIconsFieldUpdateOperationsInput;

    @Field(() => EnumSystemIconsFieldUpdateOperationsInput, {nullable:true})
    icon2?: EnumSystemIconsFieldUpdateOperationsInput;

    @Field(() => EnumSystemIconsFieldUpdateOperationsInput, {nullable:true})
    icon3?: EnumSystemIconsFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text1?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text2?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text3?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    trackingNumber?: StringFieldUpdateOperationsInput;
}
