import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCommentCreateWithoutChildrenInput } from './product-comment-create-without-children.input';
import { Type } from 'class-transformer';
import { ProductCommentCreateOrConnectWithoutChildrenInput } from './product-comment-create-or-connect-without-children.input';
import { ProductCommentUpsertWithoutChildrenInput } from './product-comment-upsert-without-children.input';
import { ProductCommentWhereInput } from './product-comment-where.input';
import { Prisma } from '@prisma/client';
import { ProductCommentWhereUniqueInput } from './product-comment-where-unique.input';
import { ProductCommentUpdateToOneWithWhereWithoutChildrenInput } from './product-comment-update-to-one-with-where-without-children.input';

@InputType()
export class ProductCommentUpdateOneWithoutChildrenNestedInput {

    @Field(() => ProductCommentCreateWithoutChildrenInput, {nullable:true})
    @Type(() => ProductCommentCreateWithoutChildrenInput)
    create?: ProductCommentCreateWithoutChildrenInput;

    @Field(() => ProductCommentCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => ProductCommentCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: ProductCommentCreateOrConnectWithoutChildrenInput;

    @Field(() => ProductCommentUpsertWithoutChildrenInput, {nullable:true})
    @Type(() => ProductCommentUpsertWithoutChildrenInput)
    upsert?: ProductCommentUpsertWithoutChildrenInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => ProductCommentWhereInput, {nullable:true})
    @Type(() => ProductCommentWhereInput)
    delete?: ProductCommentWhereInput;

    @Field(() => ProductCommentWhereUniqueInput, {nullable:true})
    @Type(() => ProductCommentWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductCommentWhereUniqueInput, 'id'>;

    @Field(() => ProductCommentUpdateToOneWithWhereWithoutChildrenInput, {nullable:true})
    @Type(() => ProductCommentUpdateToOneWithWhereWithoutChildrenInput)
    update?: ProductCommentUpdateToOneWithWhereWithoutChildrenInput;
}
