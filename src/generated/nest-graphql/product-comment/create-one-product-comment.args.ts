import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCommentCreateInput } from './product-comment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductCommentArgs {

    @Field(() => ProductCommentCreateInput, {nullable:false})
    @Type(() => ProductCommentCreateInput)
    data!: ProductCommentCreateInput;
}
