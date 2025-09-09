import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCommentCreateWithoutParentInput } from './product-comment-create-without-parent.input';
import { Type } from 'class-transformer';
import { ProductCommentCreateOrConnectWithoutParentInput } from './product-comment-create-or-connect-without-parent.input';
import { ProductCommentUpsertWithWhereUniqueWithoutParentInput } from './product-comment-upsert-with-where-unique-without-parent.input';
import { ProductCommentCreateManyParentInputEnvelope } from './product-comment-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductCommentWhereUniqueInput } from './product-comment-where-unique.input';
import { ProductCommentUpdateWithWhereUniqueWithoutParentInput } from './product-comment-update-with-where-unique-without-parent.input';
import { ProductCommentUpdateManyWithWhereWithoutParentInput } from './product-comment-update-many-with-where-without-parent.input';
import { ProductCommentScalarWhereInput } from './product-comment-scalar-where.input';

@InputType()
export class ProductCommentUncheckedUpdateManyWithoutParentNestedInput {

    @Field(() => [ProductCommentCreateWithoutParentInput], {nullable:true})
    @Type(() => ProductCommentCreateWithoutParentInput)
    create?: Array<ProductCommentCreateWithoutParentInput>;

    @Field(() => [ProductCommentCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => ProductCommentCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<ProductCommentCreateOrConnectWithoutParentInput>;

    @Field(() => [ProductCommentUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => ProductCommentUpsertWithWhereUniqueWithoutParentInput)
    upsert?: Array<ProductCommentUpsertWithWhereUniqueWithoutParentInput>;

    @Field(() => ProductCommentCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => ProductCommentCreateManyParentInputEnvelope)
    createMany?: ProductCommentCreateManyParentInputEnvelope;

    @Field(() => [ProductCommentWhereUniqueInput], {nullable:true})
    @Type(() => ProductCommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductCommentWhereUniqueInput, 'id'>>;

    @Field(() => [ProductCommentWhereUniqueInput], {nullable:true})
    @Type(() => ProductCommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductCommentWhereUniqueInput, 'id'>>;

    @Field(() => [ProductCommentWhereUniqueInput], {nullable:true})
    @Type(() => ProductCommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductCommentWhereUniqueInput, 'id'>>;

    @Field(() => [ProductCommentWhereUniqueInput], {nullable:true})
    @Type(() => ProductCommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductCommentWhereUniqueInput, 'id'>>;

    @Field(() => [ProductCommentUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    @Type(() => ProductCommentUpdateWithWhereUniqueWithoutParentInput)
    update?: Array<ProductCommentUpdateWithWhereUniqueWithoutParentInput>;

    @Field(() => [ProductCommentUpdateManyWithWhereWithoutParentInput], {nullable:true})
    @Type(() => ProductCommentUpdateManyWithWhereWithoutParentInput)
    updateMany?: Array<ProductCommentUpdateManyWithWhereWithoutParentInput>;

    @Field(() => [ProductCommentScalarWhereInput], {nullable:true})
    @Type(() => ProductCommentScalarWhereInput)
    deleteMany?: Array<ProductCommentScalarWhereInput>;
}
