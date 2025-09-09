import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromoCodeType } from './promo-code-type.enum';

@InputType()
export class NestedEnumPromoCodeTypeFilter {

    @Field(() => PromoCodeType, {nullable:true})
    equals?: `${PromoCodeType}`;

    @Field(() => [PromoCodeType], {nullable:true})
    in?: Array<`${PromoCodeType}`>;

    @Field(() => [PromoCodeType], {nullable:true})
    notIn?: Array<`${PromoCodeType}`>;

    @Field(() => NestedEnumPromoCodeTypeFilter, {nullable:true})
    not?: NestedEnumPromoCodeTypeFilter;
}
