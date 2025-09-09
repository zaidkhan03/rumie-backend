import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BannedWordsCategoryUpdateOneRequiredWithoutWordsNestedInput } from '../banned-words-category/banned-words-category-update-one-required-without-words-nested.input';

@InputType()
export class BannedWordUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    word?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BannedWordsCategoryUpdateOneRequiredWithoutWordsNestedInput, {nullable:true})
    category?: BannedWordsCategoryUpdateOneRequiredWithoutWordsNestedInput;
}
