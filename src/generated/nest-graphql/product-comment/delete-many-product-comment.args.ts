import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCommentWhereInput } from './product-comment-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProductCommentArgs {

    @Field(() => ProductCommentWhereInput, {nullable:true})
    @Type(() => ProductCommentWhereInput)
    where?: ProductCommentWhereInput;
}
