import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DMType } from './dm-type.enum';
import { NestedEnumDMTypeWithAggregatesFilter } from './nested-enum-dm-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDMTypeFilter } from './nested-enum-dm-type-filter.input';

@InputType()
export class EnumDMTypeWithAggregatesFilter {

    @Field(() => DMType, {nullable:true})
    equals?: `${DMType}`;

    @Field(() => [DMType], {nullable:true})
    in?: Array<`${DMType}`>;

    @Field(() => [DMType], {nullable:true})
    notIn?: Array<`${DMType}`>;

    @Field(() => NestedEnumDMTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDMTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDMTypeFilter, {nullable:true})
    _min?: NestedEnumDMTypeFilter;

    @Field(() => NestedEnumDMTypeFilter, {nullable:true})
    _max?: NestedEnumDMTypeFilter;
}
