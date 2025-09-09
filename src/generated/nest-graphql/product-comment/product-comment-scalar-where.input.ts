import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class ProductCommentScalarWhereInput {

    @Field(() => [ProductCommentScalarWhereInput], {nullable:true})
    AND?: Array<ProductCommentScalarWhereInput>;

    @Field(() => [ProductCommentScalarWhereInput], {nullable:true})
    OR?: Array<ProductCommentScalarWhereInput>;

    @Field(() => [ProductCommentScalarWhereInput], {nullable:true})
    NOT?: Array<ProductCommentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parentId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productListingId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    flagged?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    archived?: BoolFilter;
}
