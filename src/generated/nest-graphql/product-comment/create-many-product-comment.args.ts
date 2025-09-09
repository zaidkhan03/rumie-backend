import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductCommentCreateManyInput } from './product-comment-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductCommentArgs {

    @Field(() => [ProductCommentCreateManyInput], {nullable:false})
    @Type(() => ProductCommentCreateManyInput)
    data!: Array<ProductCommentCreateManyInput>;
}
