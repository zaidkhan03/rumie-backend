import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCommentWhereInput } from './product-comment-where.input';
import { Type } from 'class-transformer';
import { ProductCommentOrderByWithAggregationInput } from './product-comment-order-by-with-aggregation.input';
import { ProductCommentScalarFieldEnum } from './product-comment-scalar-field.enum';
import { ProductCommentScalarWhereWithAggregatesInput } from './product-comment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductCommentCountAggregateInput } from './product-comment-count-aggregate.input';
import { ProductCommentMinAggregateInput } from './product-comment-min-aggregate.input';
import { ProductCommentMaxAggregateInput } from './product-comment-max-aggregate.input';

@ArgsType()
export class ProductCommentGroupByArgs {

    @Field(() => ProductCommentWhereInput, {nullable:true})
    @Type(() => ProductCommentWhereInput)
    where?: ProductCommentWhereInput;

    @Field(() => [ProductCommentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductCommentOrderByWithAggregationInput>;

    @Field(() => [ProductCommentScalarFieldEnum], {nullable:false})
    by!: Array<`${ProductCommentScalarFieldEnum}`>;

    @Field(() => ProductCommentScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductCommentScalarWhereWithAggregatesInput;

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
