import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCommentScalarWhereInput } from './product-comment-scalar-where.input';
import { Type } from 'class-transformer';
import { ProductCommentUpdateManyMutationInput } from './product-comment-update-many-mutation.input';

@InputType()
export class ProductCommentUpdateManyWithWhereWithoutParentInput {

    @Field(() => ProductCommentScalarWhereInput, {nullable:false})
    @Type(() => ProductCommentScalarWhereInput)
    where!: ProductCommentScalarWhereInput;

    @Field(() => ProductCommentUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductCommentUpdateManyMutationInput)
    data!: ProductCommentUpdateManyMutationInput;
}
