import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutConversationsInput } from './product-listing-create-without-conversations.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutConversationsInput } from './product-listing-create-or-connect-without-conversations.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';

@InputType()
export class ProductListingCreateNestedOneWithoutConversationsInput {

    @Field(() => ProductListingCreateWithoutConversationsInput, {nullable:true})
    @Type(() => ProductListingCreateWithoutConversationsInput)
    create?: ProductListingCreateWithoutConversationsInput;

    @Field(() => ProductListingCreateOrConnectWithoutConversationsInput, {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutConversationsInput)
    connectOrCreate?: ProductListingCreateOrConnectWithoutConversationsInput;

    @Field(() => ProductListingWhereUniqueInput, {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;
}
