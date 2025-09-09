import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromoCodeUpdateManyMutationInput } from './promo-code-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PromoCodeWhereInput } from './promo-code-where.input';

@ArgsType()
export class UpdateManyPromoCodeArgs {

    @Field(() => PromoCodeUpdateManyMutationInput, {nullable:false})
    @Type(() => PromoCodeUpdateManyMutationInput)
    data!: PromoCodeUpdateManyMutationInput;

    @Field(() => PromoCodeWhereInput, {nullable:true})
    @Type(() => PromoCodeWhereInput)
    where?: PromoCodeWhereInput;
}
