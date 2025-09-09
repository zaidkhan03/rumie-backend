import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCommentCreateManyParentInput } from './product-comment-create-many-parent.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCommentCreateManyParentInputEnvelope {

    @Field(() => [ProductCommentCreateManyParentInput], {nullable:false})
    @Type(() => ProductCommentCreateManyParentInput)
    data!: Array<ProductCommentCreateManyParentInput>;
}
