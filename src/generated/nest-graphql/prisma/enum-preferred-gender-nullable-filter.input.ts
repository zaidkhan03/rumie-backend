import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreferredGender } from './preferred-gender.enum';
import { NestedEnumPreferredGenderNullableFilter } from './nested-enum-preferred-gender-nullable-filter.input';

@InputType()
export class EnumPreferredGenderNullableFilter {

    @Field(() => PreferredGender, {nullable:true})
    equals?: `${PreferredGender}`;

    @Field(() => [PreferredGender], {nullable:true})
    in?: Array<`${PreferredGender}`>;

    @Field(() => [PreferredGender], {nullable:true})
    notIn?: Array<`${PreferredGender}`>;

    @Field(() => NestedEnumPreferredGenderNullableFilter, {nullable:true})
    not?: NestedEnumPreferredGenderNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
