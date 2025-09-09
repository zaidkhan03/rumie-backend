import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreferredGender } from './preferred-gender.enum';

@InputType()
export class NestedEnumPreferredGenderNullableFilter {

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
