import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumPreferredGenderNullableFilter } from '../prisma/enum-preferred-gender-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class ProductCategoryScalarWhereInput {

    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    AND?: Array<ProductCategoryScalarWhereInput>;

    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    OR?: Array<ProductCategoryScalarWhereInput>;

    @Field(() => [ProductCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<ProductCategoryScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parentId?: StringNullableFilter;

    @Field(() => EnumPreferredGenderNullableFilter, {nullable:true})
    preferredGender?: EnumPreferredGenderNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    shippable?: BoolFilter;
}
