import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TextCampusChatPayloadObjectEqualityInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:false})
    text!: string;
}
