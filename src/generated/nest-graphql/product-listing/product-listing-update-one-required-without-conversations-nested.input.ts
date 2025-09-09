import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutConversationsInput } from './product-listing-create-without-conversations.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutConversationsInput } from './product-listing-create-or-connect-without-conversations.input';
import { ProductListingUpsertWithoutConversationsInput } from './product-listing-upsert-without-conversations.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { ProductListingUpdateToOneWithWhereWithoutConversationsInput } from './product-listing-update-to-one-with-where-without-conversations.input';

@InputType()
export class ProductListingUpdateOneRequiredWithoutConversationsNestedInput {

    @Field(() => ProductListingCreateWithoutConversationsInput, {nullable:true})
    @Type(() => ProductListingCreateWithoutConversationsInput)
    create?: ProductListingCreateWithoutConversationsInput;

    @Field(() => ProductListingCreateOrConnectWithoutConversationsInput, {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutConversationsInput)
    connectOrCreate?: ProductListingCreateOrConnectWithoutConversationsInput;

    @Field(() => ProductListingUpsertWithoutConversationsInput, {nullable:true})
    @Type(() => ProductListingUpsertWithoutConversationsInput)
    upsert?: ProductListingUpsertWithoutConversationsInput;

    @Field(() => ProductListingWhereUniqueInput, {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingUpdateToOneWithWhereWithoutConversationsInput, {nullable:true})
    @Type(() => ProductListingUpdateToOneWithWhereWithoutConversationsInput)
    update?: ProductListingUpdateToOneWithWhereWithoutConversationsInput;
}
