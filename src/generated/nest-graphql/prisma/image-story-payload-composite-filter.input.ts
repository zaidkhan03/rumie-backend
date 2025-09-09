import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageStoryPayloadObjectEqualityInput } from './image-story-payload-object-equality.input';
import { ImageStoryPayloadWhereInput } from '../image-story-payload/image-story-payload-where.input';

@InputType()
export class ImageStoryPayloadCompositeFilter {

    @Field(() => ImageStoryPayloadObjectEqualityInput, {nullable:true})
    equals?: ImageStoryPayloadObjectEqualityInput;

    @Field(() => ImageStoryPayloadWhereInput, {nullable:true})
    is?: ImageStoryPayloadWhereInput;

    @Field(() => ImageStoryPayloadWhereInput, {nullable:true})
    isNot?: ImageStoryPayloadWhereInput;
}
