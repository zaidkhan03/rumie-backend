import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { DMTextBubble } from '../dm-text-bubble/dm-text-bubble.model';
import { DMStoryShareBubble } from '../dm-story-share-bubble/dm-story-share-bubble.model';

@ObjectType()
export class DMMessageType {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => DMTextBubble, {nullable:false})
    dmTextBubble?: DMTextBubble;

    @Field(() => DMStoryShareBubble, {nullable:false})
    dmStoryShareBubble?: DMStoryShareBubble;
}
