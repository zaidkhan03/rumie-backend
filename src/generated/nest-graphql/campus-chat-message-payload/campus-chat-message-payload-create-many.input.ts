import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TextCampusChatPayloadCreateEnvelopeInput } from '../text-campus-chat-payload/text-campus-chat-payload-create-envelope.input';
import { ProductShareCampusChatPayloadCreateEnvelopeInput } from '../product-share-campus-chat-payload/product-share-campus-chat-payload-create-envelope.input';

@InputType()
export class CampusChatMessagePayloadCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TextCampusChatPayloadCreateEnvelopeInput, {nullable:false})
    text!: TextCampusChatPayloadCreateEnvelopeInput;

    @Field(() => ProductShareCampusChatPayloadCreateEnvelopeInput, {nullable:false})
    productShare!: ProductShareCampusChatPayloadCreateEnvelopeInput;
}
