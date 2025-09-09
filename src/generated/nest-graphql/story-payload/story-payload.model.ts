import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { StoryProductPayload } from '../story-product-payload/story-product-payload.model';
import { ImageStoryPayload } from '../image-story-payload/image-story-payload.model';

@ObjectType()
export class StoryPayload {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => StoryProductPayload, {nullable:false})
    photo?: StoryProductPayload;

    @Field(() => ImageStoryPayload, {nullable:false})
    image?: ImageStoryPayload;
}
