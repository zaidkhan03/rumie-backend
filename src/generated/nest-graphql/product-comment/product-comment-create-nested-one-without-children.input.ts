import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCommentCreateWithoutChildrenInput } from './product-comment-create-without-children.input';
import { Type } from 'class-transformer';
import { ProductCommentCreateOrConnectWithoutChildrenInput } from './product-comment-create-or-connect-without-children.input';
import { Prisma } from '@prisma/client';
import { ProductCommentWhereUniqueInput } from './product-comment-where-unique.input';

@InputType()
export class ProductCommentCreateNestedOneWithoutChildrenInput {

    @Field(() => ProductCommentCreateWithoutChildrenInput, {nullable:true})
    @Type(() => ProductCommentCreateWithoutChildrenInput)
    create?: ProductCommentCreateWithoutChildrenInput;

    @Field(() => ProductCommentCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => ProductCommentCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: ProductCommentCreateOrConnectWithoutChildrenInput;

    @Field(() => ProductCommentWhereUniqueInput, {nullable:true})
    @Type(() => ProductCommentWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductCommentWhereUniqueInput, 'id'>;
}
