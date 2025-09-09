import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Platform } from './platform.enum';
import { NestedEnumPlatformNullableWithAggregatesFilter } from './nested-enum-platform-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumPlatformNullableFilter } from './nested-enum-platform-nullable-filter.input';

@InputType()
export class EnumPlatformNullableWithAggregatesFilter {

    @Field(() => Platform, {nullable:true})
    equals?: `${Platform}`;

    @Field(() => [Platform], {nullable:true})
    in?: Array<`${Platform}`>;

    @Field(() => [Platform], {nullable:true})
    notIn?: Array<`${Platform}`>;

    @Field(() => NestedEnumPlatformNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPlatformNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumPlatformNullableFilter, {nullable:true})
    _min?: NestedEnumPlatformNullableFilter;

    @Field(() => NestedEnumPlatformNullableFilter, {nullable:true})
    _max?: NestedEnumPlatformNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
