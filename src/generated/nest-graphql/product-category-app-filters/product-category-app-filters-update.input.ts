import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumSelectionChoiceFieldUpdateOperationsInput } from '../prisma/enum-selection-choice-field-update-operations.input';
import { FilterChoiceCreateInput } from '../filter-choice/filter-choice-create.input';

@InputType()
export class ProductCategoryAppFiltersUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumSelectionChoiceFieldUpdateOperationsInput, {nullable:true})
    selectionType?: EnumSelectionChoiceFieldUpdateOperationsInput;

    @Field(() => [FilterChoiceCreateInput], {nullable:true})
    choices?: Array<FilterChoiceCreateInput>;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    infoImage?: StringFieldUpdateOperationsInput;
}
