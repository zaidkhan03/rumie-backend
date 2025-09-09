import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DMTextBubbleUpdateEnvelopeInput } from '../dm-text-bubble/dm-text-bubble-update-envelope.input';
import { DMStoryShareBubbleUpdateEnvelopeInput } from '../dm-story-share-bubble/dm-story-share-bubble-update-envelope.input';

@InputType()
export class DMMessageTypeUncheckedUpdateInput {

    @Field(() => DMTextBubbleUpdateEnvelopeInput, {nullable:true})
    dmTextBubble?: DMTextBubbleUpdateEnvelopeInput;

    @Field(() => DMStoryShareBubbleUpdateEnvelopeInput, {nullable:true})
    dmStoryShareBubble?: DMStoryShareBubbleUpdateEnvelopeInput;
}
