import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDealTypeFilter } from '../prisma/enum-deal-type-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class DealScalarWhereInput {

    @Field(() => [DealScalarWhereInput], {nullable:true})
    AND?: Array<DealScalarWhereInput>;

    @Field(() => [DealScalarWhereInput], {nullable:true})
    OR?: Array<DealScalarWhereInput>;

    @Field(() => [DealScalarWhereInput], {nullable:true})
    NOT?: Array<DealScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    url?: StringNullableFilter;

    @Field(() => EnumDealTypeFilter, {nullable:true})
    type?: EnumDealTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    couponCode?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    savedUserIds?: StringNullableListFilter;
}
