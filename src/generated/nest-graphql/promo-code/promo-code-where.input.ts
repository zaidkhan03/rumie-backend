import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateRangeCompositeFilter } from '../prisma/date-range-composite-filter.input';
import { EnumPromoCodeTypeFilter } from '../prisma/enum-promo-code-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PromoCodeWhereInput {

    @Field(() => [PromoCodeWhereInput], {nullable:true})
    AND?: Array<PromoCodeWhereInput>;

    @Field(() => [PromoCodeWhereInput], {nullable:true})
    OR?: Array<PromoCodeWhereInput>;

    @Field(() => [PromoCodeWhereInput], {nullable:true})
    NOT?: Array<PromoCodeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateRangeCompositeFilter, {nullable:true})
    validity?: DateRangeCompositeFilter;

    @Field(() => EnumPromoCodeTypeFilter, {nullable:true})
    type?: EnumPromoCodeTypeFilter;

    @Field(() => IntFilter, {nullable:true})
    value?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    usageLimit?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    useCount?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
