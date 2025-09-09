import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class ShoppingPreferenceScalarWhereInput {

    @Field(() => [ShoppingPreferenceScalarWhereInput], {nullable:true})
    AND?: Array<ShoppingPreferenceScalarWhereInput>;

    @Field(() => [ShoppingPreferenceScalarWhereInput], {nullable:true})
    OR?: Array<ShoppingPreferenceScalarWhereInput>;

    @Field(() => [ShoppingPreferenceScalarWhereInput], {nullable:true})
    NOT?: Array<ShoppingPreferenceScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    userIds?: StringNullableListFilter;
}
