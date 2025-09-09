import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductCommentOrderByRelationAggregateInput } from './product-comment-order-by-relation-aggregate.input';

@InputType()
export class ProductCommentOrderByWithRelationInput {

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

    @Field(() => ProductCommentOrderByWithRelationInput, {nullable:true})
    parent?: ProductCommentOrderByWithRelationInput;

    @Field(() => ProductCommentOrderByRelationAggregateInput, {nullable:true})
    children?: ProductCommentOrderByRelationAggregateInput;
}
