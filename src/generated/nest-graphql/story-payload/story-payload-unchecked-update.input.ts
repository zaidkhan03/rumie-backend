import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryProductPayloadUpdateEnvelopeInput } from '../story-product-payload/story-product-payload-update-envelope.input';
import { ImageStoryPayloadUpdateEnvelopeInput } from '../image-story-payload/image-story-payload-update-envelope.input';

@InputType()
export class StoryPayloadUncheckedUpdateInput {

    @Field(() => StoryProductPayloadUpdateEnvelopeInput, {nullable:true})
    photo?: StoryProductPayloadUpdateEnvelopeInput;

    @Field(() => ImageStoryPayloadUpdateEnvelopeInput, {nullable:true})
    image?: ImageStoryPayloadUpdateEnvelopeInput;
}
