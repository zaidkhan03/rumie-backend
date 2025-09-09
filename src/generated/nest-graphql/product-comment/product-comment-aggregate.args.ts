import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCommentWhereInput } from './product-comment-where.input';
import { Type } from 'class-transformer';
import { ProductCommentOrderByWithRelationInput } from './product-comment-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductCommentWhereUniqueInput } from './product-comment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductCommentCountAggregateInput } from './product-comment-count-aggregate.input';
import { ProductCommentMinAggregateInput } from './product-comment-min-aggregate.input';
import { ProductCommentMaxAggregateInput } from './product-comment-max-aggregate.input';

@ArgsType()
export class ProductCommentAggregateArgs {

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

    @Field(() => ProductCommentCountAggregateInput, {nullable:true})
    _count?: ProductCommentCountAggregateInput;

    @Field(() => ProductCommentMinAggregateInput, {nullable:true})
    _min?: ProductCommentMinAggregateInput;

    @Field(() => ProductCommentMaxAggregateInput, {nullable:true})
    _max?: ProductCommentMaxAggregateInput;
}
