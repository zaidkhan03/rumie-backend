import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderType } from './order-type.enum';

@InputType()
export class NestedEnumOrderTypeFilter {

    @Field(() => OrderType, {nullable:true})
    equals?: `${OrderType}`;

    @Field(() => [OrderType], {nullable:true})
    in?: Array<`${OrderType}`>;

    @Field(() => [OrderType], {nullable:true})
    notIn?: Array<`${OrderType}`>;

    @Field(() => NestedEnumOrderTypeFilter, {nullable:true})
    not?: NestedEnumOrderTypeFilter;
}
