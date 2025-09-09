import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductCommentWhereUniqueInput } from './product-comment-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCommentUpdateWithoutParentInput } from './product-comment-update-without-parent.input';

@InputType()
export class ProductCommentUpdateWithWhereUniqueWithoutParentInput {

    @Field(() => ProductCommentWhereUniqueInput, {nullable:false})
    @Type(() => ProductCommentWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCommentWhereUniqueInput, 'id'>;

    @Field(() => ProductCommentUpdateWithoutParentInput, {nullable:false})
    @Type(() => ProductCommentUpdateWithoutParentInput)
    data!: ProductCommentUpdateWithoutParentInput;
}
