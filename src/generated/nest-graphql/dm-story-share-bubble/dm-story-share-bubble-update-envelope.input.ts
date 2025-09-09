import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DMStoryShareBubbleCreateInput } from './dm-story-share-bubble-create.input';
import { Type } from 'class-transformer';
import { DMStoryShareBubbleUpdateInput } from './dm-story-share-bubble-update.input';

@InputType()
export class DMStoryShareBubbleUpdateEnvelopeInput {

    @Field(() => DMStoryShareBubbleCreateInput, {nullable:true})
    @Type(() => DMStoryShareBubbleCreateInput)
    set?: DMStoryShareBubbleCreateInput;

    @Field(() => DMStoryShareBubbleUpdateInput, {nullable:true})
    @Type(() => DMStoryShareBubbleUpdateInput)
    update?: DMStoryShareBubbleUpdateInput;
}
