import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class DMStoryShareBubbleWhereInput {

    @Field(() => [DMStoryShareBubbleWhereInput], {nullable:true})
    AND?: Array<DMStoryShareBubbleWhereInput>;

    @Field(() => [DMStoryShareBubbleWhereInput], {nullable:true})
    OR?: Array<DMStoryShareBubbleWhereInput>;

    @Field(() => [DMStoryShareBubbleWhereInput], {nullable:true})
    NOT?: Array<DMStoryShareBubbleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    thumbnail?: StringFilter;
}
