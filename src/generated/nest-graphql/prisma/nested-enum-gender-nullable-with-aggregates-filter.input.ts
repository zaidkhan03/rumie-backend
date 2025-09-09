import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from './gender.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumGenderNullableFilter } from './nested-enum-gender-nullable-filter.input';

@InputType()
export class NestedEnumGenderNullableWithAggregatesFilter {

    @Field(() => Gender, {nullable:true})
    equals?: `${Gender}`;

    @Field(() => [Gender], {nullable:true})
    in?: Array<`${Gender}`>;

    @Field(() => [Gender], {nullable:true})
    notIn?: Array<`${Gender}`>;

    @Field(() => NestedEnumGenderNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGenderNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumGenderNullableFilter, {nullable:true})
    _min?: NestedEnumGenderNullableFilter;

    @Field(() => NestedEnumGenderNullableFilter, {nullable:true})
    _max?: NestedEnumGenderNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
