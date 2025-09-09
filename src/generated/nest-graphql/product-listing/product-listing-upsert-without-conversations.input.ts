import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingUpdateWithoutConversationsInput } from './product-listing-update-without-conversations.input';
import { Type } from 'class-transformer';
import { ProductListingCreateWithoutConversationsInput } from './product-listing-create-without-conversations.input';
import { ProductListingWhereInput } from './product-listing-where.input';

@InputType()
export class ProductListingUpsertWithoutConversationsInput {

    @Field(() => ProductListingUpdateWithoutConversationsInput, {nullable:false})
    @Type(() => ProductListingUpdateWithoutConversationsInput)
    update!: ProductListingUpdateWithoutConversationsInput;

    @Field(() => ProductListingCreateWithoutConversationsInput, {nullable:false})
    @Type(() => ProductListingCreateWithoutConversationsInput)
    create!: ProductListingCreateWithoutConversationsInput;

    @Field(() => ProductListingWhereInput, {nullable:true})
    @Type(() => ProductListingWhereInput)
    where?: ProductListingWhereInput;
}
