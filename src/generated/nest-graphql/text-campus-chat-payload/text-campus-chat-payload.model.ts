import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TextCampusChatPayload {

    @Field(() => String, {nullable:true})
    title!: string | null;

    @Field(() => String, {nullable:false})
    text!: string;
}
