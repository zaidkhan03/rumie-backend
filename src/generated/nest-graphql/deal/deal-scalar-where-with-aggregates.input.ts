import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumDealTypeWithAggregatesFilter } from '../prisma/enum-deal-type-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class DealScalarWhereWithAggregatesInput {

    @Field(() => [DealScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DealScalarWhereWithAggregatesInput>;

    @Field(() => [DealScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DealScalarWhereWithAggregatesInput>;

    @Field(() => [DealScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DealScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    url?: StringNullableWithAggregatesFilter;

    @Field(() => EnumDealTypeWithAggregatesFilter, {nullable:true})
    type?: EnumDealTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    couponCode?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    savedUserIds?: StringNullableListFilter;
}
