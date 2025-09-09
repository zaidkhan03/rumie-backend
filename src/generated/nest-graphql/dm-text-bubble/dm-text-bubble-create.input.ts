import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DMTextBubbleCreateInput {

    @Field(() => String, {nullable:false})
    text!: string;
}
