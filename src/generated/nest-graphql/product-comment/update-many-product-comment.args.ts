import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCommentUpdateManyMutationInput } from './product-comment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductCommentWhereInput } from './product-comment-where.input';

@ArgsType()
export class UpdateManyProductCommentArgs {

    @Field(() => ProductCommentUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductCommentUpdateManyMutationInput)
    data!: ProductCommentUpdateManyMutationInput;

    @Field(() => ProductCommentWhereInput, {nullable:true})
    @Type(() => ProductCommentWhereInput)
    where?: ProductCommentWhereInput;
}
