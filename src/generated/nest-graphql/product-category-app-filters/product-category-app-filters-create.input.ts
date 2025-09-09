import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SelectionChoice } from '../prisma/selection-choice.enum';
import { FilterChoiceCreateInput } from '../filter-choice/filter-choice-create.input';

@InputType()
export class ProductCategoryAppFiltersCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SelectionChoice, {nullable:false})
    selectionType!: `${SelectionChoice}`;

    @Field(() => [FilterChoiceCreateInput], {nullable:true})
    choices?: Array<FilterChoiceCreateInput>;

    @Field(() => String, {nullable:false})
    infoImage!: string;
}
