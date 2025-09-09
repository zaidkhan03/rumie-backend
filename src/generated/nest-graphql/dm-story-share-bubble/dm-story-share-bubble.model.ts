import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DMStoryShareBubble {

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:false})
    thumbnail!: string;
}
