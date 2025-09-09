import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCommentUpdateInput } from './product-comment-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductCommentWhereUniqueInput } from './product-comment-where-unique.input';

@ArgsType()
export class UpdateOneProductCommentArgs {

    @Field(() => ProductCommentUpdateInput, {nullable:false})
    @Type(() => ProductCommentUpdateInput)
    data!: ProductCommentUpdateInput;

    @Field(() => ProductCommentWhereUniqueInput, {nullable:false})
    @Type(() => ProductCommentWhereUniqueInput)
    where!: Prisma.AtLeast<ProductCommentWhereUniqueInput, 'id'>;
}
