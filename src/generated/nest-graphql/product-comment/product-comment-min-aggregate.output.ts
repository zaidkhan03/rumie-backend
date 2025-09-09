import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductCommentMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    productListingId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Boolean, {nullable:true})
    flagged?: boolean;

    @Field(() => Boolean, {nullable:true})
    archived?: boolean;
}
