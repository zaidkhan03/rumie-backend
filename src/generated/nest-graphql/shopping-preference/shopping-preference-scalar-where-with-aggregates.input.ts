import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class ShoppingPreferenceScalarWhereWithAggregatesInput {

    @Field(() => [ShoppingPreferenceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ShoppingPreferenceScalarWhereWithAggregatesInput>;

    @Field(() => [ShoppingPreferenceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ShoppingPreferenceScalarWhereWithAggregatesInput>;

    @Field(() => [ShoppingPreferenceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ShoppingPreferenceScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    userIds?: StringNullableListFilter;
}
