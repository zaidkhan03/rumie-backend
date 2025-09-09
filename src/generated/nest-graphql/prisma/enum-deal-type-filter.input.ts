import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealType } from './deal-type.enum';
import { NestedEnumDealTypeFilter } from './nested-enum-deal-type-filter.input';

@InputType()
export class EnumDealTypeFilter {

    @Field(() => DealType, {nullable:true})
    equals?: `${DealType}`;

    @Field(() => [DealType], {nullable:true})
    in?: Array<`${DealType}`>;

    @Field(() => [DealType], {nullable:true})
    notIn?: Array<`${DealType}`>;

    @Field(() => NestedEnumDealTypeFilter, {nullable:true})
    not?: NestedEnumDealTypeFilter;
}
