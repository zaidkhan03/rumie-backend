import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumPromoCodeTypeWithAggregatesFilter } from '../prisma/enum-promo-code-type-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PromoCodeScalarWhereWithAggregatesInput {

    @Field(() => [PromoCodeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PromoCodeScalarWhereWithAggregatesInput>;

    @Field(() => [PromoCodeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PromoCodeScalarWhereWithAggregatesInput>;

    @Field(() => [PromoCodeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PromoCodeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => EnumPromoCodeTypeWithAggregatesFilter, {nullable:true})
    type?: EnumPromoCodeTypeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    value?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    usageLimit?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    useCount?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
