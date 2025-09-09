import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCommentCreateNestedOneWithoutChildrenInput } from './product-comment-create-nested-one-without-children.input';
import { ProductCommentCreateNestedManyWithoutParentInput } from './product-comment-create-nested-many-without-parent.input';

@InputType()
export class ProductCommentCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    productListingId?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Boolean, {nullable:true})
    flagged?: boolean;

    @Field(() => Boolean, {nullable:true})
    archived?: boolean;

    @Field(() => ProductCommentCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: ProductCommentCreateNestedOneWithoutChildrenInput;

    @Field(() => ProductCommentCreateNestedManyWithoutParentInput, {nullable:true})
    children?: ProductCommentCreateNestedManyWithoutParentInput;
}
