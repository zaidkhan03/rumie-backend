import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProductCommentCount } from './product-comment-count.output';

@ObjectType()
export class ProductComment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:true})
    parentId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    productListingId!: string | null;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    flagged!: boolean;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    archived!: boolean;

    @Field(() => ProductComment, {nullable:true})
    parent?: ProductComment | null;

    @Field(() => [ProductComment], {nullable:true})
    children?: Array<ProductComment>;

    @Field(() => ProductCommentCount, {nullable:false})
    _count?: ProductCommentCount;
}
