import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryMediaObjectEqualityInput } from './story-media-object-equality.input';
import { StoryMediaWhereInput } from '../story-media/story-media-where.input';

@InputType()
export class StoryMediaCompositeFilter {

    @Field(() => StoryMediaObjectEqualityInput, {nullable:true})
    equals?: StoryMediaObjectEqualityInput;

    @Field(() => StoryMediaWhereInput, {nullable:true})
    is?: StoryMediaWhereInput;

    @Field(() => StoryMediaWhereInput, {nullable:true})
    isNot?: StoryMediaWhereInput;
}
