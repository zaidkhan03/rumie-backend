import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gateway } from './gateway.enum';
import { NestedEnumGatewayFilter } from './nested-enum-gateway-filter.input';

@InputType()
export class EnumGatewayFilter {

    @Field(() => Gateway, {nullable:true})
    equals?: `${Gateway}`;

    @Field(() => [Gateway], {nullable:true})
    in?: Array<`${Gateway}`>;

    @Field(() => [Gateway], {nullable:true})
    notIn?: Array<`${Gateway}`>;

    @Field(() => NestedEnumGatewayFilter, {nullable:true})
    not?: NestedEnumGatewayFilter;
}
