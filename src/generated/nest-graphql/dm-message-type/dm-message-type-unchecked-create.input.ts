import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DMTextBubbleCreateEnvelopeInput } from '../dm-text-bubble/dm-text-bubble-create-envelope.input';
import { DMStoryShareBubbleCreateEnvelopeInput } from '../dm-story-share-bubble/dm-story-share-bubble-create-envelope.input';

@InputType()
export class DMMessageTypeUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => DMTextBubbleCreateEnvelopeInput, {nullable:false})
    dmTextBubble!: DMTextBubbleCreateEnvelopeInput;

    @Field(() => DMStoryShareBubbleCreateEnvelopeInput, {nullable:false})
    dmStoryShareBubble!: DMStoryShareBubbleCreateEnvelopeInput;
}
