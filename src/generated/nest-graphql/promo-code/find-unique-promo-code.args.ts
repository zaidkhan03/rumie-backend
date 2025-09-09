import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PromoCodeWhereUniqueInput } from './promo-code-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePromoCodeArgs {

    @Field(() => PromoCodeWhereUniqueInput, {nullable:false})
    @Type(() => PromoCodeWhereUniqueInput)
    where!: Prisma.AtLeast<PromoCodeWhereUniqueInput, 'id'>;
}
