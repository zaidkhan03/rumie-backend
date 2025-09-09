import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdType } from './ad-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAdTypeFilter } from './nested-enum-ad-type-filter.input';

@InputType()
export class NestedEnumAdTypeWithAggregatesFilter {

    @Field(() => AdType, {nullable:true})
    equals?: `${AdType}`;

    @Field(() => [AdType], {nullable:true})
    in?: Array<`${AdType}`>;

    @Field(() => [AdType], {nullable:true})
    notIn?: Array<`${AdType}`>;

    @Field(() => NestedEnumAdTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAdTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAdTypeFilter, {nullable:true})
    _min?: NestedEnumAdTypeFilter;

    @Field(() => NestedEnumAdTypeFilter, {nullable:true})
    _max?: NestedEnumAdTypeFilter;
}
