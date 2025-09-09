import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ListingSettingScalarWhereWithAggregatesInput {

    @Field(() => [ListingSettingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ListingSettingScalarWhereWithAggregatesInput>;

    @Field(() => [ListingSettingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ListingSettingScalarWhereWithAggregatesInput>;

    @Field(() => [ListingSettingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ListingSettingScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    enableSelling?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    enableRenting?: BoolWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    reasonsForSelling?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    meetupPreferences?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    productDeliveryModes?: StringNullableListFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sellerFees?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    taxes?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    creditProcessing?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
