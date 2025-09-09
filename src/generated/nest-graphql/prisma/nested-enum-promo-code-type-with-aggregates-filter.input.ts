import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromoCodeType } from './promo-code-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPromoCodeTypeFilter } from './nested-enum-promo-code-type-filter.input';

@InputType()
export class NestedEnumPromoCodeTypeWithAggregatesFilter {

    @Field(() => PromoCodeType, {nullable:true})
    equals?: `${PromoCodeType}`;

    @Field(() => [PromoCodeType], {nullable:true})
    in?: Array<`${PromoCodeType}`>;

    @Field(() => [PromoCodeType], {nullable:true})
    notIn?: Array<`${PromoCodeType}`>;

    @Field(() => NestedEnumPromoCodeTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPromoCodeTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPromoCodeTypeFilter, {nullable:true})
    _min?: NestedEnumPromoCodeTypeFilter;

    @Field(() => NestedEnumPromoCodeTypeFilter, {nullable:true})
    _max?: NestedEnumPromoCodeTypeFilter;
}
