import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromoCodeWhereInput } from './promo-code-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPromoCodeArgs {

    @Field(() => PromoCodeWhereInput, {nullable:true})
    @Type(() => PromoCodeWhereInput)
    where?: PromoCodeWhereInput;
}
