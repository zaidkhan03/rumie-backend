import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCommentWhereInput } from './product-comment-where.input';

@InputType()
export class ProductCommentNullableRelationFilter {

    @Field(() => ProductCommentWhereInput, {nullable:true})
    is?: ProductCommentWhereInput;

    @Field(() => ProductCommentWhereInput, {nullable:true})
    isNot?: ProductCommentWhereInput;
}
