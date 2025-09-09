import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCommentWhereInput } from './product-comment-where.input';
import { Type } from 'class-transformer';
import { ProductCommentOrderByWithRelationInput } from './product-comment-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductCommentWhereUniqueInput } from './product-comment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductCommentScalarFieldEnum } from './product-comment-scalar-field.enum';

@ArgsType()
export class FindFirstProductCommentArgs {

    @Field(() => ProductCommentWhereInput, {nullable:true})
    @Type(() => ProductCommentWhereInput)
    where?: ProductCommentWhereInput;

    @Field(() => [ProductCommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductCommentOrderByWithRelationInput>;

    @Field(() => ProductCommentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductCommentWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductCommentScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProductCommentScalarFieldEnum}`>;
}
