import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductCommentCountAggregate } from './product-comment-count-aggregate.output';
import { ProductCommentMinAggregate } from './product-comment-min-aggregate.output';
import { ProductCommentMaxAggregate } from './product-comment-max-aggregate.output';

@ObjectType()
export class AggregateProductComment {

    @Field(() => ProductCommentCountAggregate, {nullable:true})
    _count?: ProductCommentCountAggregate;

    @Field(() => ProductCommentMinAggregate, {nullable:true})
    _min?: ProductCommentMinAggregate;

    @Field(() => ProductCommentMaxAggregate, {nullable:true})
    _max?: ProductCommentMaxAggregate;
}
