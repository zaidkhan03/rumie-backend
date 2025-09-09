import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DMTextBubble {

    @Field(() => String, {nullable:false})
    text!: string;
}
