import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductCommentWhereUniqueInput } from './product-comment-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCommentCreateWithoutParentInput } from './product-comment-create-without-parent.input';

@InputType()
export class ProductCommentCreateOrConnectWithoutParentInput {

    @Field(() => ProductCommentWhereUniqueInput, {nullable:false})
    @Type(() => ProductCommentWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCommentWhereUniqueInput, 'id'>;

    @Field(() => ProductCommentCreateWithoutParentInput, {nullable:false})
    @Type(() => ProductCommentCreateWithoutParentInput)
    create!: ProductCommentCreateWithoutParentInput;
}
