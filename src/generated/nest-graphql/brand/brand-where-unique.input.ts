import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandWhereInput } from './brand-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductListingListRelationFilter } from '../product-listing/product-listing-list-relation-filter.input';

@InputType()
export class BrandWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [BrandWhereInput], {nullable:true})
    AND?: Array<BrandWhereInput>;

    @Field(() => [BrandWhereInput], {nullable:true})
    OR?: Array<BrandWhereInput>;

    @Field(() => [BrandWhereInput], {nullable:true})
    NOT?: Array<BrandWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    featured?: BoolFilter;

    @Field(() => ProductListingListRelationFilter, {nullable:true})
    ProductListing?: ProductListingListRelationFilter;
}
