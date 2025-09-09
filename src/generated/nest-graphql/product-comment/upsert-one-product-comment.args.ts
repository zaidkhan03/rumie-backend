import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductCommentWhereUniqueInput } from './product-comment-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCommentCreateInput } from './product-comment-create.input';
import { ProductCommentUpdateInput } from './product-comment-update.input';

@ArgsType()
export class UpsertOneProductCommentArgs {

    @Field(() => ProductCommentWhereUniqueInput, {nullable:false})
    @Type(() => ProductCommentWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCommentWhereUniqueInput, 'id'>;

    @Field(() => ProductCommentCreateInput, {nullable:false})
    @Type(() => ProductCommentCreateInput)
    create!: ProductCommentCreateInput;

    @Field(() => ProductCommentUpdateInput, {nullable:false})
    @Type(() => ProductCommentUpdateInput)
    update!: ProductCommentUpdateInput;
}
