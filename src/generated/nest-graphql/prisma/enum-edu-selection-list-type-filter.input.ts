import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduSelectionListType } from './edu-selection-list-type.enum';
import { NestedEnumEduSelectionListTypeFilter } from './nested-enum-edu-selection-list-type-filter.input';

@InputType()
export class EnumEduSelectionListTypeFilter {

    @Field(() => EduSelectionListType, {nullable:true})
    equals?: `${EduSelectionListType}`;

    @Field(() => [EduSelectionListType], {nullable:true})
    in?: Array<`${EduSelectionListType}`>;

    @Field(() => [EduSelectionListType], {nullable:true})
    notIn?: Array<`${EduSelectionListType}`>;

    @Field(() => NestedEnumEduSelectionListTypeFilter, {nullable:true})
    not?: NestedEnumEduSelectionListTypeFilter;
}
