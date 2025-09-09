import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromoCodeCreateManyInput } from './promo-code-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPromoCodeArgs {

    @Field(() => [PromoCodeCreateManyInput], {nullable:false})
    @Type(() => PromoCodeCreateManyInput)
    data!: Array<PromoCodeCreateManyInput>;
}
