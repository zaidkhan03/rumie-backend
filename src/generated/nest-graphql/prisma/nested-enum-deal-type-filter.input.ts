import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealType } from './deal-type.enum';

@InputType()
export class NestedEnumDealTypeFilter {

    @Field(() => DealType, {nullable:true})
    equals?: `${DealType}`;

    @Field(() => [DealType], {nullable:true})
    in?: Array<`${DealType}`>;

    @Field(() => [DealType], {nullable:true})
    notIn?: Array<`${DealType}`>;

    @Field(() => NestedEnumDealTypeFilter, {nullable:true})
    not?: NestedEnumDealTypeFilter;
}
