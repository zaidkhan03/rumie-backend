import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromoCodeWhereInput } from './promo-code-where.input';
import { Type } from 'class-transformer';
import { PromoCodeOrderByWithRelationInput } from './promo-code-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PromoCodeWhereUniqueInput } from './promo-code-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PromoCodeScalarFieldEnum } from './promo-code-scalar-field.enum';

@ArgsType()
export class FindManyPromoCodeArgs {

    @Field(() => PromoCodeWhereInput, {nullable:true})
    @Type(() => PromoCodeWhereInput)
    where?: PromoCodeWhereInput;

    @Field(() => [PromoCodeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PromoCodeOrderByWithRelationInput>;

    @Field(() => PromoCodeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PromoCodeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PromoCodeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PromoCodeScalarFieldEnum}`>;
}
