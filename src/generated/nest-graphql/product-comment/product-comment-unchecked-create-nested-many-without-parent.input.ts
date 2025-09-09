import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCommentCreateWithoutParentInput } from './product-comment-create-without-parent.input';
import { Type } from 'class-transformer';
import { ProductCommentCreateOrConnectWithoutParentInput } from './product-comment-create-or-connect-without-parent.input';
import { ProductCommentCreateManyParentInputEnvelope } from './product-comment-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductCommentWhereUniqueInput } from './product-comment-where-unique.input';

@InputType()
export class ProductCommentUncheckedCreateNestedManyWithoutParentInput {

    @Field(() => [ProductCommentCreateWithoutParentInput], {nullable:true})
    @Type(() => ProductCommentCreateWithoutParentInput)
    create?: Array<ProductCommentCreateWithoutParentInput>;

    @Field(() => [ProductCommentCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => ProductCommentCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<ProductCommentCreateOrConnectWithoutParentInput>;

    @Field(() => ProductCommentCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => ProductCommentCreateManyParentInputEnvelope)
    createMany?: ProductCommentCreateManyParentInputEnvelope;

    @Field(() => [ProductCommentWhereUniqueInput], {nullable:true})
    @Type(() => ProductCommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductCommentWhereUniqueInput, 'id'>>;
}
