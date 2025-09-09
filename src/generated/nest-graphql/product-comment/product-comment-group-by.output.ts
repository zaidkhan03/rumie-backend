import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductCommentCountAggregate } from './product-comment-count-aggregate.output';
import { ProductCommentMinAggregate } from './product-comment-min-aggregate.output';
import { ProductCommentMaxAggregate } from './product-comment-max-aggregate.output';

@ObjectType()
export class ProductCommentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    productListingId?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Boolean, {nullable:false})
    flagged!: boolean;

    @Field(() => Boolean, {nullable:false})
    archived!: boolean;

    @Field(() => ProductCommentCountAggregate, {nullable:true})
    _count?: ProductCommentCountAggregate;

    @Field(() => ProductCommentMinAggregate, {nullable:true})
    _min?: ProductCommentMinAggregate;

    @Field(() => ProductCommentMaxAggregate, {nullable:true})
    _max?: ProductCommentMaxAggregate;
}
