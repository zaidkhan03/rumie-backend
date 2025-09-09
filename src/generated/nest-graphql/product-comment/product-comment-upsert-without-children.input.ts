import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCommentUpdateWithoutChildrenInput } from './product-comment-update-without-children.input';
import { Type } from 'class-transformer';
import { ProductCommentCreateWithoutChildrenInput } from './product-comment-create-without-children.input';
import { ProductCommentWhereInput } from './product-comment-where.input';

@InputType()
export class ProductCommentUpsertWithoutChildrenInput {

    @Field(() => ProductCommentUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => ProductCommentUpdateWithoutChildrenInput)
    update!: ProductCommentUpdateWithoutChildrenInput;

    @Field(() => ProductCommentCreateWithoutChildrenInput, {nullable:false})
    @Type(() => ProductCommentCreateWithoutChildrenInput)
    create!: ProductCommentCreateWithoutChildrenInput;

    @Field(() => ProductCommentWhereInput, {nullable:true})
    @Type(() => ProductCommentWhereInput)
    where?: ProductCommentWhereInput;
}
