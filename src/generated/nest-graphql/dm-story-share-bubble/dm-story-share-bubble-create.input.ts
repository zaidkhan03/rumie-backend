import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DMStoryShareBubbleCreateInput {

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:false})
    thumbnail!: string;
}
