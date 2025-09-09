import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gateway } from './gateway.enum';

@InputType()
export class NestedEnumGatewayFilter {

    @Field(() => Gateway, {nullable:true})
    equals?: `${Gateway}`;

    @Field(() => [Gateway], {nullable:true})
    in?: Array<`${Gateway}`>;

    @Field(() => [Gateway], {nullable:true})
    notIn?: Array<`${Gateway}`>;

    @Field(() => NestedEnumGatewayFilter, {nullable:true})
    not?: NestedEnumGatewayFilter;
}
