import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gateway } from './gateway.enum';
import { NestedEnumGatewayWithAggregatesFilter } from './nested-enum-gateway-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumGatewayFilter } from './nested-enum-gateway-filter.input';

@InputType()
export class EnumGatewayWithAggregatesFilter {

    @Field(() => Gateway, {nullable:true})
    equals?: `${Gateway}`;

    @Field(() => [Gateway], {nullable:true})
    in?: Array<`${Gateway}`>;

    @Field(() => [Gateway], {nullable:true})
    notIn?: Array<`${Gateway}`>;

    @Field(() => NestedEnumGatewayWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGatewayWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumGatewayFilter, {nullable:true})
    _min?: NestedEnumGatewayFilter;

    @Field(() => NestedEnumGatewayFilter, {nullable:true})
    _max?: NestedEnumGatewayFilter;
}
