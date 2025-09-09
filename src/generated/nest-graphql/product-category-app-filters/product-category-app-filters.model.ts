import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SelectionChoice } from '../prisma/selection-choice.enum';
import { FilterChoice } from '../filter-choice/filter-choice.model';

@ObjectType()
export class ProductCategoryAppFilters {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => SelectionChoice, {nullable:false})
    selectionType!: `${SelectionChoice}`;

    @Field(() => [FilterChoice], {nullable:true})
    choices?: Array<FilterChoice>;

    @Field(() => String, {nullable:false})
    infoImage!: string;
}
