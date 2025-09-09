import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StoryProductPayloadCreateInput {

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => String, {nullable:true})
    fontColor?: string;

    @Field(() => String, {nullable:true})
    textPosX?: string;

    @Field(() => String, {nullable:true})
    textPosY?: string;

    @Field(() => String, {nullable:true})
    textHexCode?: string;
}
