import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PromoCodeWhereUniqueInput } from './promo-code-where-unique.input';
import { Type } from 'class-transformer';
import { PromoCodeCreateInput } from './promo-code-create.input';
import { PromoCodeUpdateInput } from './promo-code-update.input';

@ArgsType()
export class UpsertOnePromoCodeArgs {

    @Field(() => PromoCodeWhereUniqueInput, {nullable:false})
    @Type(() => PromoCodeWhereUniqueInput)
    where!: Prisma.AtLeast<PromoCodeWhereUniqueInput, 'id'>;

    @Field(() => PromoCodeCreateInput, {nullable:false})
    @Type(() => PromoCodeCreateInput)
    create!: PromoCodeCreateInput;

    @Field(() => PromoCodeUpdateInput, {nullable:false})
    @Type(() => PromoCodeUpdateInput)
    update!: PromoCodeUpdateInput;
}
