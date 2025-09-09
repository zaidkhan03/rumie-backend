import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DMStoryShareBubbleObjectEqualityInput {

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:false})
    thumbnail!: string;
}
