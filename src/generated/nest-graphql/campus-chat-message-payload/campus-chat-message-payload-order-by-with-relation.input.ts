import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TextCampusChatPayloadOrderByInput } from '../text-campus-chat-payload/text-campus-chat-payload-order-by.input';
import { ProductShareCampusChatPayloadOrderByInput } from '../product-share-campus-chat-payload/product-share-campus-chat-payload-order-by.input';

@InputType()
export class CampusChatMessagePayloadOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => TextCampusChatPayloadOrderByInput, {nullable:true})
    text?: TextCampusChatPayloadOrderByInput;

    @Field(() => ProductShareCampusChatPayloadOrderByInput, {nullable:true})
    productShare?: ProductShareCampusChatPayloadOrderByInput;
}
