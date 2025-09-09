import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductCommentCountOrderByAggregateInput } from './product-comment-count-order-by-aggregate.input';
import { ProductCommentMaxOrderByAggregateInput } from './product-comment-max-order-by-aggregate.input';
import { ProductCommentMinOrderByAggregateInput } from './product-comment-min-order-by-aggregate.input';

@InputType()
export class ProductCommentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    text?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    parentId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productListingId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    flagged?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    archived?: `${SortOrder}`;

    @Field(() => ProductCommentCountOrderByAggregateInput, {nullable:true})
    _count?: ProductCommentCountOrderByAggregateInput;

    @Field(() => ProductCommentMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductCommentMaxOrderByAggregateInput;

    @Field(() => ProductCommentMinOrderByAggregateInput, {nullable:true})
    _min?: ProductCommentMinOrderByAggregateInput;
}
