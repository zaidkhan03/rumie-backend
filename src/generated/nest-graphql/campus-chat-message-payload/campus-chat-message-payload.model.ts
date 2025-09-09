import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TextCampusChatPayload } from '../text-campus-chat-payload/text-campus-chat-payload.model';
import { ProductShareCampusChatPayload } from '../product-share-campus-chat-payload/product-share-campus-chat-payload.model';

@ObjectType()
export class CampusChatMessagePayload {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => TextCampusChatPayload, {nullable:false})
    text?: TextCampusChatPayload;

    @Field(() => ProductShareCampusChatPayload, {nullable:false})
    productShare?: ProductShareCampusChatPayload;
}
