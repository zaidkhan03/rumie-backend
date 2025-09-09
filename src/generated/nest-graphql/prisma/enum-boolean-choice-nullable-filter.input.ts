import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BooleanChoice } from './boolean-choice.enum';
import { NestedEnumBooleanChoiceNullableFilter } from './nested-enum-boolean-choice-nullable-filter.input';

@InputType()
export class EnumBooleanChoiceNullableFilter {

    @Field(() => BooleanChoice, {nullable:true})
    equals?: `${BooleanChoice}`;

    @Field(() => [BooleanChoice], {nullable:true})
    in?: Array<`${BooleanChoice}`>;

    @Field(() => [BooleanChoice], {nullable:true})
    notIn?: Array<`${BooleanChoice}`>;

    @Field(() => NestedEnumBooleanChoiceNullableFilter, {nullable:true})
    not?: NestedEnumBooleanChoiceNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
