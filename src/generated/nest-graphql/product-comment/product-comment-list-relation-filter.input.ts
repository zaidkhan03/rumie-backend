import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCommentWhereInput } from './product-comment-where.input';

@InputType()
export class ProductCommentListRelationFilter {

    @Field(() => ProductCommentWhereInput, {nullable:true})
    every?: ProductCommentWhereInput;

    @Field(() => ProductCommentWhereInput, {nullable:true})
    some?: ProductCommentWhereInput;

    @Field(() => ProductCommentWhereInput, {nullable:true})
    none?: ProductCommentWhereInput;
}
