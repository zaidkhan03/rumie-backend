import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealType } from './deal-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDealTypeFilter } from './nested-enum-deal-type-filter.input';

@InputType()
export class NestedEnumDealTypeWithAggregatesFilter {

    @Field(() => DealType, {nullable:true})
    equals?: `${DealType}`;

    @Field(() => [DealType], {nullable:true})
    in?: Array<`${DealType}`>;

    @Field(() => [DealType], {nullable:true})
    notIn?: Array<`${DealType}`>;

    @Field(() => NestedEnumDealTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDealTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDealTypeFilter, {nullable:true})
    _min?: NestedEnumDealTypeFilter;

    @Field(() => NestedEnumDealTypeFilter, {nullable:true})
    _max?: NestedEnumDealTypeFilter;
}
