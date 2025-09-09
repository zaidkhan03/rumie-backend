import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingWhereInput } from './product-listing-where.input';
import { Type } from 'class-transformer';
import { ProductListingUpdateWithoutConversationsInput } from './product-listing-update-without-conversations.input';

@InputType()
export class ProductListingUpdateToOneWithWhereWithoutConversationsInput {

    @Field(() => ProductListingWhereInput, {nullable:true})
    @Type(() => ProductListingWhereInput)
    where?: ProductListingWhereInput;

    @Field(() => ProductListingUpdateWithoutConversationsInput, {nullable:false})
    @Type(() => ProductListingUpdateWithoutConversationsInput)
    data!: ProductListingUpdateWithoutConversationsInput;
}
