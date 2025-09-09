import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromoCodeCreateInput } from './promo-code-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePromoCodeArgs {

    @Field(() => PromoCodeCreateInput, {nullable:false})
    @Type(() => PromoCodeCreateInput)
    data!: PromoCodeCreateInput;
}
