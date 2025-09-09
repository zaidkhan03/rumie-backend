import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SelectionChoice } from './selection-choice.enum';

@InputType()
export class NestedEnumSelectionChoiceFilter {

    @Field(() => SelectionChoice, {nullable:true})
    equals?: `${SelectionChoice}`;

    @Field(() => [SelectionChoice], {nullable:true})
    in?: Array<`${SelectionChoice}`>;

    @Field(() => [SelectionChoice], {nullable:true})
    notIn?: Array<`${SelectionChoice}`>;

    @Field(() => NestedEnumSelectionChoiceFilter, {nullable:true})
    not?: NestedEnumSelectionChoiceFilter;
}
