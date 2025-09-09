import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DMTextBubbleOrderByInput } from '../dm-text-bubble/dm-text-bubble-order-by.input';
import { DMStoryShareBubbleOrderByInput } from '../dm-story-share-bubble/dm-story-share-bubble-order-by.input';

@InputType()
export class DMMessageTypeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => DMTextBubbleOrderByInput, {nullable:true})
    dmTextBubble?: DMTextBubbleOrderByInput;

    @Field(() => DMStoryShareBubbleOrderByInput, {nullable:true})
    dmStoryShareBubble?: DMStoryShareBubbleOrderByInput;
}
