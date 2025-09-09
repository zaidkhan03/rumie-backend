import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InternalCTA } from './internal-cta.enum';
import { NestedEnumInternalCTANullableWithAggregatesFilter } from './nested-enum-internal-cta-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumInternalCTANullableFilter } from './nested-enum-internal-cta-nullable-filter.input';

@InputType()
export class EnumInternalCTANullableWithAggregatesFilter {

    @Field(() => InternalCTA, {nullable:true})
    equals?: `${InternalCTA}`;

    @Field(() => [InternalCTA], {nullable:true})
    in?: Array<`${InternalCTA}`>;

    @Field(() => [InternalCTA], {nullable:true})
    notIn?: Array<`${InternalCTA}`>;

    @Field(() => NestedEnumInternalCTANullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumInternalCTANullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumInternalCTANullableFilter, {nullable:true})
    _min?: NestedEnumInternalCTANullableFilter;

    @Field(() => NestedEnumInternalCTANullableFilter, {nullable:true})
    _max?: NestedEnumInternalCTANullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
