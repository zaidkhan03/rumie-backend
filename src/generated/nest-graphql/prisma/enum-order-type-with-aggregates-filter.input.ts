import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderType } from './order-type.enum';
import { NestedEnumOrderTypeWithAggregatesFilter } from './nested-enum-order-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumOrderTypeFilter } from './nested-enum-order-type-filter.input';

@InputType()
export class EnumOrderTypeWithAggregatesFilter {

    @Field(() => OrderType, {nullable:true})
    equals?: `${OrderType}`;

    @Field(() => [OrderType], {nullable:true})
    in?: Array<`${OrderType}`>;

    @Field(() => [OrderType], {nullable:true})
    notIn?: Array<`${OrderType}`>;

    @Field(() => NestedEnumOrderTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumOrderTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumOrderTypeFilter, {nullable:true})
    _min?: NestedEnumOrderTypeFilter;

    @Field(() => NestedEnumOrderTypeFilter, {nullable:true})
    _max?: NestedEnumOrderTypeFilter;
}
