import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderType } from './order-type.enum';
import { NestedEnumOrderTypeFilter } from './nested-enum-order-type-filter.input';

@InputType()
export class EnumOrderTypeFilter {

    @Field(() => OrderType, {nullable:true})
    equals?: `${OrderType}`;

    @Field(() => [OrderType], {nullable:true})
    in?: Array<`${OrderType}`>;

    @Field(() => [OrderType], {nullable:true})
    notIn?: Array<`${OrderType}`>;

    @Field(() => NestedEnumOrderTypeFilter, {nullable:true})
    not?: NestedEnumOrderTypeFilter;
}
