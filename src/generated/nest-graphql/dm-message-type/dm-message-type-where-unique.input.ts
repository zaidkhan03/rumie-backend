import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DMMessageTypeWhereInput } from './dm-message-type-where.input';
import { DMTextBubbleCompositeFilter } from '../prisma/dm-text-bubble-composite-filter.input';
import { DMStoryShareBubbleCompositeFilter } from '../prisma/dm-story-share-bubble-composite-filter.input';

@InputType()
export class DMMessageTypeWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [DMMessageTypeWhereInput], {nullable:true})
    AND?: Array<DMMessageTypeWhereInput>;

    @Field(() => [DMMessageTypeWhereInput], {nullable:true})
    OR?: Array<DMMessageTypeWhereInput>;

    @Field(() => [DMMessageTypeWhereInput], {nullable:true})
    NOT?: Array<DMMessageTypeWhereInput>;

    @Field(() => DMTextBubbleCompositeFilter, {nullable:true})
    dmTextBubble?: DMTextBubbleCompositeFilter;

    @Field(() => DMStoryShareBubbleCompositeFilter, {nullable:true})
    dmStoryShareBubble?: DMStoryShareBubbleCompositeFilter;
}
