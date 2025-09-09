import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SelectionChoice } from './selection-choice.enum';

@InputType()
export class EnumSelectionChoiceFieldUpdateOperationsInput {

    @Field(() => SelectionChoice, {nullable:true})
    set?: `${SelectionChoice}`;
}
