import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreferredGender } from './preferred-gender.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumPreferredGenderNullableFilter } from './nested-enum-preferred-gender-nullable-filter.input';

@InputType()
export class NestedEnumPreferredGenderNullableWithAggregatesFilter {

    @Field(() => PreferredGender, {nullable:true})
    equals?: `${PreferredGender}`;

    @Field(() => [PreferredGender], {nullable:true})
    in?: Array<`${PreferredGender}`>;

    @Field(() => [PreferredGender], {nullable:true})
    notIn?: Array<`${PreferredGender}`>;

    @Field(() => NestedEnumPreferredGenderNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPreferredGenderNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumPreferredGenderNullableFilter, {nullable:true})
    _min?: NestedEnumPreferredGenderNullableFilter;

    @Field(() => NestedEnumPreferredGenderNullableFilter, {nullable:true})
    _max?: NestedEnumPreferredGenderNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
