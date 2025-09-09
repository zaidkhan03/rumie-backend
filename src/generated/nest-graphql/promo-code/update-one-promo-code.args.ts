import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromoCodeUpdateInput } from './promo-code-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PromoCodeWhereUniqueInput } from './promo-code-where-unique.input';

@ArgsType()
export class UpdateOnePromoCodeArgs {

    @Field(() => PromoCodeUpdateInput, {nullable:false})
    @Type(() => PromoCodeUpdateInput)
    data!: PromoCodeUpdateInput;

    @Field(() => PromoCodeWhereUniqueInput, {nullable:false})
    @Type(() => PromoCodeWhereUniqueInput)
    where!: Prisma.AtLeast<PromoCodeWhereUniqueInput, 'id'>;
}
