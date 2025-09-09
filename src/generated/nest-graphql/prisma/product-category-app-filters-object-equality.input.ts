import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SelectionChoice } from './selection-choice.enum';
import { FilterChoiceObjectEqualityInput } from './filter-choice-object-equality.input';

@InputType()
export class ProductCategoryAppFiltersObjectEqualityInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SelectionChoice, {nullable:false})
    selectionType!: `${SelectionChoice}`;

    @Field(() => [FilterChoiceObjectEqualityInput], {nullable:true})
    choices?: Array<FilterChoiceObjectEqualityInput>;

    @Field(() => String, {nullable:false})
    infoImage!: string;
}
