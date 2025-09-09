import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class DMTextBubbleWhereInput {

    @Field(() => [DMTextBubbleWhereInput], {nullable:true})
    AND?: Array<DMTextBubbleWhereInput>;

    @Field(() => [DMTextBubbleWhereInput], {nullable:true})
    OR?: Array<DMTextBubbleWhereInput>;

    @Field(() => [DMTextBubbleWhereInput], {nullable:true})
    NOT?: Array<DMTextBubbleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;
}
