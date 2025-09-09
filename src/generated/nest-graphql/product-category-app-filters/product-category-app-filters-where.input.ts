import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumSelectionChoiceFilter } from '../prisma/enum-selection-choice-filter.input';
import { FilterChoiceObjectEqualityInput } from '../prisma/filter-choice-object-equality.input';

@InputType()
export class ProductCategoryAppFiltersWhereInput {

    @Field(() => [ProductCategoryAppFiltersWhereInput], {nullable:true})
    AND?: Array<ProductCategoryAppFiltersWhereInput>;

    @Field(() => [ProductCategoryAppFiltersWhereInput], {nullable:true})
    OR?: Array<ProductCategoryAppFiltersWhereInput>;

    @Field(() => [ProductCategoryAppFiltersWhereInput], {nullable:true})
    NOT?: Array<ProductCategoryAppFiltersWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumSelectionChoiceFilter, {nullable:true})
    selectionType?: EnumSelectionChoiceFilter;

    @Field(() => [FilterChoiceObjectEqualityInput], {nullable:true})
    choices?: Array<FilterChoiceObjectEqualityInput>;

    @Field(() => StringFilter, {nullable:true})
    infoImage?: StringFilter;
}
