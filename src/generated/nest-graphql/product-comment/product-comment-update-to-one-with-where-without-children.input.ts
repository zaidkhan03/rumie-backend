import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCommentWhereInput } from './product-comment-where.input';
import { Type } from 'class-transformer';
import { ProductCommentUpdateWithoutChildrenInput } from './product-comment-update-without-children.input';

@InputType()
export class ProductCommentUpdateToOneWithWhereWithoutChildrenInput {

    @Field(() => ProductCommentWhereInput, {nullable:true})
    @Type(() => ProductCommentWhereInput)
    where?: ProductCommentWhereInput;

    @Field(() => ProductCommentUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => ProductCommentUpdateWithoutChildrenInput)
    data!: ProductCommentUpdateWithoutChildrenInput;
}
