import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageState } from './message-state.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumMessageStateNullableFilter } from './nested-enum-message-state-nullable-filter.input';

@InputType()
export class NestedEnumMessageStateNullableWithAggregatesFilter {

    @Field(() => MessageState, {nullable:true})
    equals?: `${MessageState}`;

    @Field(() => [MessageState], {nullable:true})
    in?: Array<`${MessageState}`>;

    @Field(() => [MessageState], {nullable:true})
    notIn?: Array<`${MessageState}`>;

    @Field(() => NestedEnumMessageStateNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMessageStateNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumMessageStateNullableFilter, {nullable:true})
    _min?: NestedEnumMessageStateNullableFilter;

    @Field(() => NestedEnumMessageStateNullableFilter, {nullable:true})
    _max?: NestedEnumMessageStateNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
