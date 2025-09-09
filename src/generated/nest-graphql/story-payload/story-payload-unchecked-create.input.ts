import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryProductPayloadCreateEnvelopeInput } from '../story-product-payload/story-product-payload-create-envelope.input';
import { ImageStoryPayloadCreateEnvelopeInput } from '../image-story-payload/image-story-payload-create-envelope.input';

@InputType()
export class StoryPayloadUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => StoryProductPayloadCreateEnvelopeInput, {nullable:false})
    photo!: StoryProductPayloadCreateEnvelopeInput;

    @Field(() => ImageStoryPayloadCreateEnvelopeInput, {nullable:false})
    image!: ImageStoryPayloadCreateEnvelopeInput;
}
