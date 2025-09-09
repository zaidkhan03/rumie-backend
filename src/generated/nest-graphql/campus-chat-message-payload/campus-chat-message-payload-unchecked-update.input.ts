import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TextCampusChatPayloadUpdateEnvelopeInput } from '../text-campus-chat-payload/text-campus-chat-payload-update-envelope.input';
import { ProductShareCampusChatPayloadUpdateEnvelopeInput } from '../product-share-campus-chat-payload/product-share-campus-chat-payload-update-envelope.input';

@InputType()
export class CampusChatMessagePayloadUncheckedUpdateInput {

    @Field(() => TextCampusChatPayloadUpdateEnvelopeInput, {nullable:true})
    text?: TextCampusChatPayloadUpdateEnvelopeInput;

    @Field(() => ProductShareCampusChatPayloadUpdateEnvelopeInput, {nullable:true})
    productShare?: ProductShareCampusChatPayloadUpdateEnvelopeInput;
}
