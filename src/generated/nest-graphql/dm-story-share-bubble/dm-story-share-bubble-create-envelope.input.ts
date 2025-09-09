import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DMStoryShareBubbleCreateInput } from './dm-story-share-bubble-create.input';
import { Type } from 'class-transformer';

@InputType()
export class DMStoryShareBubbleCreateEnvelopeInput {

    @Field(() => DMStoryShareBubbleCreateInput, {nullable:true})
    @Type(() => DMStoryShareBubbleCreateInput)
    set?: DMStoryShareBubbleCreateInput;
}
