import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DMStoryShareBubbleObjectEqualityInput } from './dm-story-share-bubble-object-equality.input';
import { DMStoryShareBubbleWhereInput } from '../dm-story-share-bubble/dm-story-share-bubble-where.input';

@InputType()
export class DMStoryShareBubbleCompositeFilter {

    @Field(() => DMStoryShareBubbleObjectEqualityInput, {nullable:true})
    equals?: DMStoryShareBubbleObjectEqualityInput;

    @Field(() => DMStoryShareBubbleWhereInput, {nullable:true})
    is?: DMStoryShareBubbleWhereInput;

    @Field(() => DMStoryShareBubbleWhereInput, {nullable:true})
    isNot?: DMStoryShareBubbleWhereInput;
}
