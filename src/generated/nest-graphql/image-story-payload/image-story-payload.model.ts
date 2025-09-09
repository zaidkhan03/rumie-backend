import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ImageStoryPayload {

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => String, {nullable:true})
    fontColor!: string | null;

    @Field(() => String, {nullable:true})
    textPosX!: string | null;

    @Field(() => String, {nullable:true})
    textPosY!: string | null;

    @Field(() => String, {nullable:true})
    textHexCode!: string | null;
}
