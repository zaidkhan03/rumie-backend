import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DMTextBubbleObjectEqualityInput {

    @Field(() => String, {nullable:false})
    text!: string;
}
