import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductCommentWhereUniqueInput } from './product-comment-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCommentCreateWithoutChildrenInput } from './product-comment-create-without-children.input';

@InputType()
export class ProductCommentCreateOrConnectWithoutChildrenInput {

    @Field(() => ProductCommentWhereUniqueInput, {nullable:false})
    @Type(() => ProductCommentWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCommentWhereUniqueInput, 'id'>;

    @Field(() => ProductCommentCreateWithoutChildrenInput, {nullable:false})
    @Type(() => ProductCommentCreateWithoutChildrenInput)
    create!: ProductCommentCreateWithoutChildrenInput;
}
