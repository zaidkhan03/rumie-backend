import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromoCodeType } from './promo-code-type.enum';

@InputType()
export class EnumPromoCodeTypeFieldUpdateOperationsInput {

    @Field(() => PromoCodeType, {nullable:true})
    set?: `${PromoCodeType}`;
}
