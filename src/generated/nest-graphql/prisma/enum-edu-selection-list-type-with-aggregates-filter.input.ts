import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduSelectionListType } from './edu-selection-list-type.enum';
import { NestedEnumEduSelectionListTypeWithAggregatesFilter } from './nested-enum-edu-selection-list-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEduSelectionListTypeFilter } from './nested-enum-edu-selection-list-type-filter.input';

@InputType()
export class EnumEduSelectionListTypeWithAggregatesFilter {

    @Field(() => EduSelectionListType, {nullable:true})
    equals?: `${EduSelectionListType}`;

    @Field(() => [EduSelectionListType], {nullable:true})
    in?: Array<`${EduSelectionListType}`>;

    @Field(() => [EduSelectionListType], {nullable:true})
    notIn?: Array<`${EduSelectionListType}`>;

    @Field(() => NestedEnumEduSelectionListTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEduSelectionListTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEduSelectionListTypeFilter, {nullable:true})
    _min?: NestedEnumEduSelectionListTypeFilter;

    @Field(() => NestedEnumEduSelectionListTypeFilter, {nullable:true})
    _max?: NestedEnumEduSelectionListTypeFilter;
}
