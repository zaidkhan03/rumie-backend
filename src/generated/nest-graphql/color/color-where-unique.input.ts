import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColorWhereInput } from './color-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductListingListRelationFilter } from '../product-listing/product-listing-list-relation-filter.input';

@InputType()
export class ColorWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ColorWhereInput], {nullable:true})
    AND?: Array<ColorWhereInput>;

    @Field(() => [ColorWhereInput], {nullable:true})
    OR?: Array<ColorWhereInput>;

    @Field(() => [ColorWhereInput], {nullable:true})
    NOT?: Array<ColorWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    hex?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductListingListRelationFilter, {nullable:true})
    ProductListing?: ProductListingListRelationFilter;
}
