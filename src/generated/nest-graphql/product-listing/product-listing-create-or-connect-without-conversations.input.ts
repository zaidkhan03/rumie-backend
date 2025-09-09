import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingCreateWithoutConversationsInput } from './product-listing-create-without-conversations.input';

@InputType()
export class ProductListingCreateOrConnectWithoutConversationsInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingCreateWithoutConversationsInput, {nullable:false})
    @Type(() => ProductListingCreateWithoutConversationsInput)
    create!: ProductListingCreateWithoutConversationsInput;
}
