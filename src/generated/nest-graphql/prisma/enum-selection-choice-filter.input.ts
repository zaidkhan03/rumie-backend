import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SelectionChoice } from './selection-choice.enum';
import { NestedEnumSelectionChoiceFilter } from './nested-enum-selection-choice-filter.input';

@InputType()
export class EnumSelectionChoiceFilter {

    @Field(() => SelectionChoice, {nullable:true})
    equals?: `${SelectionChoice}`;

    @Field(() => [SelectionChoice], {nullable:true})
    in?: Array<`${SelectionChoice}`>;

    @Field(() => [SelectionChoice], {nullable:true})
    notIn?: Array<`${SelectionChoice}`>;

    @Field(() => NestedEnumSelectionChoiceFilter, {nullable:true})
    not?: NestedEnumSelectionChoiceFilter;
}
